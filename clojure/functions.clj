(ns com.clojure.fundamentals.functions)

(def my-name "Karan")

; Normal functions
(defn print-coffee-machine
  [serial-number]
  (println (str "Logging machine: " serial-number)))

(print-coffee-machine 1787)

; Anonymous functions
(println (map (fn [num] (+ num 1)) [1 2 3]))

(println (filter (fn [num] (= (mod num 2) 0)) [1 2 3 4 5 6 7 8 9 10]))

; Multi Arity functions
(defn my-printer
  ([] my-printer "No Parameters")
  ([one] (println one))
  ([one two] (println one two)))

(my-printer)

(my-printer "Hello World")

(my-printer "Hello" my-name)

; Variadic functions
(defn my-variadic
  [first & rest] (println rest))

(my-variadic 1 2 3 4 5)

; Recursion
(defn recursive-factorial
  [num] (
          if (zero? num) 1
            (* num (recursive-factorial (- num 1)))
          ))

(println (recursive-factorial 5))

