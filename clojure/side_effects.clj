(ns com.clojure.fundamentals.side-effects
  (:require [clojure.java.io :as io])
  (:require [clojure.java.jdbc :as sql]))

(println "Reading content of a file...")

(with-open [reader (io/reader "/home/karan/mytext")]
  (doseq [line (line-seq reader)]
    (println line)))

(println "Reading data from DB...")

(def connection-info {
                      :subprotocol "postgresql",
                      :subname "//localhost:5432/northwind"
                      :user "postgres"
                      :password "karan184"
                      })

(def customers (sql/query connection-info ["SELECT * from customers where country = 'USA'"]))

(doseq [customer customers]
  (println "")
  (println "name: " (get customer :contactname))
  (println "company: " (get customer :companyname))
  (println "phone: " (get customer :phone))
  (println "county: " (get customer :country)))