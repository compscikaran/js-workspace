(ns com.clojure.fundamentals.testing
  (:require [clojure.test :refer :all]))

(defn mathSum [a b]
     (+ a b))

(deftest test-postive
  (testing "Postive integers add up"
    (is (= (mathSum 3 4) 7))))