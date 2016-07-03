package zTest

import java.time.LocalDate
import java.time.Month

/**
 * Created by hanmomhanda on 2016-07-02.
 */

fun main(args: Array<String>) {

    // ifExpression() 을 여기에서 호출하면 컴파일에러

    // 조건식
    fun ifExpression() {
        println("===== if expression =====")

        val a = 1
        val b = 2

        println( if (a > b) a else b )

        // 대신 3항연산자가 없다..
//        println( a > b ? a : b)  // 컴파일에러
    }
    ifExpression()


    // null-safety
    fun nullSafety() {
        println("===== null-safety =====")

        // 아래는 컴파일 에러
//        val a: Int = null  // Int는 null을 할당받을 수 없다.

        // 타입에 `?`를 붙여주면 null을 할당받을 수 있는 Nullable 타입이 된다.
        val a: LocalDate? = null

        // LocalDate 타입의 변수는 LocalDate 의 모든 메서드를 호출할 수 있지만,
        val today: LocalDate = LocalDate.now()
        println("today.dayOfMonth : " + today.dayOfMonth)

        // LocalDate? 타입의 변수는 그렇지 않다.
//        println("a,dayOfMonth : " + a.dayOfMonth)  // 컴파일 에러 발생

        // Nullable 타입의 변수 a에 ? 후치연산자를 붙여주면, a? 는 다시 Non-null 타입이 되어 LocalDate의 모든 메서드를 호출할 수 있게 된다.
        // Nullable 타입의 변수 a가 null 이라면 a?.anyMethod()는 실행되지 않고 그냥 null을 반환한다.
        println("a?.dayOfMonth : " + a?.dayOfMonth)  // 컴파일 에러 발생하지 않는다. a가 null 이므로 a?.dayOfMonth는 실행되지 않고 그냥 null 반환
        // 따라서 Nullable 타입의 변수에 ? 후치연산자를 붙여 사용하는 것이 일반적으로 가장 자연스럽다

        // Nullable 타입의 변수에 !! 후치연산자를 쓰면 NPE가 발생하게 할 수 있다.
        print("a!!.dayOfMonth()로 호출되면 NPE 발생 : ")
//        println(a!!.dayOfMonth)  // 컴파일 에러는 발생하지 않으며, 실행 시 이 지점에서 NPE 발생
        println("")
        // Non-null 타입의 변수는 !! 후치연산자를 붙여주지 않아도 NPE가 발생할 수 있으므로, Non-null 타입의 변수에는 !! 사용 불필요

        // Elvis 연산자(?:)는 연산자의 왼쪽 식이 null 이 아니면 왼쪽 식의 값을 반환하고 오른쪽 식은 평가하지 않으며,
        // 왼쪽 식의 값이 null 이면 우측 식을 평가하고 결과값을 반환한다.
        val b: String? = "abc"
        val l1 = b?.length ?: -1
        println("""length of "abc" : $l1""")
        val nullB: String? = null
        val l2 = nullB?.length ?: -1
        println("""length of nullableString : $l2""")

        // null 은 Any 타입이 아니다.
        println("null is Any : " + (null is Any).toString())
        // null 은 Any? 타입이다.
        println("null is Any? : " + (null is Any?).toString())
        // Any? 타입에
        // 따라서 null.toString()은 NPE를 발생하지 않는다.
        println("toString() of Any is invoked : " + null.toString())
        // null.toString() 은 문자열 "null" 을 반환한다.
        println("""null.toString() equals "null" : ${"null".equals(null.toString())}""")


    }
    nullSafety()


    // Smart cast
    fun typeCheckAndCastUsing_is_operator(obj: Any) {
        println("===== Smart Cast =====")

        if (obj is Int) { // is 연산자가 true를 반환하면 자동으로 캐스팅 됨
            println(obj * 7)
//            println(obj + " is Int")  // 숫자 + 문자열은 컴파일에러
        }
        else if (obj is String && obj.length > 0) { // && 에 진입한다는 것은 is 연산자가 true라는 의미므로 자동으로 캐스팅됨
            println(obj + " is String")
        }
        else {
            println("obj is still of Type `Any` : " + obj is Any)
        }
    }
    typeCheckAndCastUsing_is_operator(3)
    typeCheckAndCastUsing_is_operator("abc")


    // switch, case 대신 when, ->
    fun whenArrow() {

    }

    // Extension Function

}


