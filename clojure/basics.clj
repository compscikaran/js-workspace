(ns com.clojure.fundamentals.basics
  (:import (com.clojure.fundamentals TestInterface)))

;; This is a heading comment

(defn hello-world [] (println "Hello World!"))

(hello-world)

; Defining a variable
(def my-number 1)

(println my-number)

; Parametrized method
(defn make-name [first-name]
  (str first-name " Smith"))

(println (make-name "John"))

; String type
(def word "Hello World")

(println (type word))

; Character type
(def z-char \K)

(println (type z-char))

; Regex type
(def my-regex #"[A-Z]*")

(re-find my-regex "1234 Karan")


; Integer type
(def hundred 100)

; Floating point
(def my-float 100.1234)

; Ratio type
(def my-ratio 10/7)

(println (numerator my-ratio))

;; Sequential Collections

; Vectors provide indexed access
(def my-vector [100 200 300])

(println (get my-vector 0))

; Lists are implemented by Linked List structure so no indexed access
; Backtick ensures closure does not evaluate this list since we are defining a variable
(def my-list `(5 6 7))

(println (first my-list))

;; Hashed Collections

; Sets
(def my-set #{"zachary", "james", "kalie"})

(println (contains? my-set "kalie"))

(def number-vector [1 1 2 2 3 4 4 4 4 5 5 6])

(println (set number-vector))


; Maps
(def my-map {:Zachary 1 :Kalie 4 :James 2})

(println my-map)

; Symbols are just names
(println (+ 1 2))

(println (clojure.core/+ 1 2))

(println (type nil))

(println (type false))

; Keywords are used to reference stuff
(println (get my-map :Kalie))

(println (:James my-map))

;; deftype / defrecord

(defrecord Person [name address])

(deftype Position [x y])

(def myObj (new TestInterface))

(println (.mathSum myObj 3 4))