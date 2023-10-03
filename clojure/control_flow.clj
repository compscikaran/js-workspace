(ns com.clojure.fundamentals.control-flow)

;; Conditional statements

(if (odd? 3) true false)

(if (odd? 3)
    (do (println "3 is odd")
        true)
    (do (println "3 is not odd")
        false))

(when (number? 4)
  (println "Input is a number")
  true)

(def input 3)

(case input
  1 "This is 1"
  2 "This is 2"
  3 "This is 3"
  "This is not 1,2 or 3")

(cond
  (= input 1) "Input is 1"
  (= input 2) "Input is 2"
  (= input 3) "Input is 3"
  :else "Input is not 1,2 or 3")

;; Iterations

(dotimes [n 5]
  (println (str "My number is " n)))

(doseq [num-one [1 2 3]
         num-two [4 5 6]]
        (println num-one " " num-two))

(println "List Comprehensions")

(for [num-one [1 2 3]
      num-two [4 5 6]]
  [num-one num-two])

;; Exception Handling

(try
  (/ 1 0)
  (catch Exception ex (println "uh-oh!"))
  (finally (println "Always runs!")))