(ns com.clojure.fundamentals.collections)
(require '[clojure.set :as set])

;; Collections are immutable and persistent

; Lists are sequential linked lists and Vectors are sequential Arrays

(def my-list `(1 2 3 4))

(println (conj my-list 5))

(println (take 2 my-list))

(def my-vec [1 2 3 4])

(println (get my-vec 0))

(println (subvec my-vec 0 2))

(println (assoc my-vec 1 5))


(def set1 #{1 2 3 4 5})

(def set2 #{4 5,6,7})

(def set3 #{1 2})

(println (set/union set1 set2))

(println (set/difference set1 set2))

(println (set/subset? set3 set1))

(def map1 {:A 1 :B 2 :C 3})

(println (contains? map1 :A))

(println (assoc map1 :D 4))

(println (dissoc map1 :A))

(println (find map1 :A))

(println (keys map1))

