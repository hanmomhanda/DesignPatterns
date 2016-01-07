class Template():

    def __init__(self):
        pass

    def wake_up(self):
        print("##### Wake Up by Alarm #####")

    def go2_work(self):
        pass

    def work_hard(self):
        pass

    def comeback2_home(self):
        pass

    def go2_sleep(self):
        print("***** Sweet Dream *****")

    def show_daily_life(self):
        self.wake_up()
        self.go2_work()
        self.work_hard()
        self.comeback2_home()
        self.go2_sleep()


class Developer(Template):

    def go2_work(self):
        print("@@ Please, no error today~~")

    def work_hard(self):
        print("@@@@@ What happened? It worked yesterday~~")

    def comeback2_home(self):
        print("@SuppressWarnings...")


def run():
    # 어차피 동적 타입이라
    # 추상 템플릿 클래스 타입으로 사용되지 않으므로
    # 템플릿 메서드 패턴의 의미가 있나 모르겠..
    developer = Developer()
    developer.show_daily_life()


run()