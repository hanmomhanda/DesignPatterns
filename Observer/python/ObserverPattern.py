class Subject:
    def __init__(self, name):
        self.name = name
        self.observer_set = set([])

    def add_observer(self, observer):
        self.observer_set.add(observer)

    def remove_observer(self, observer):
        self.observer_set.remove(observer)

    def say_something(self, something):
        print("+++++" + self.name + " : " + something + "+++++")
        for e in self.observer_set:
            e.notified()


class Observer:
    def notified(self):
        raise NotImplementedError


class Child:
    def __init__(self, name):
        Observer.__init__(self)
        self.name = name

    def notified(self):
        print(self.name + "이(가) 뒤에 가서 의자에 앉습니다.")


def run():
    daddy = Subject("오명운")

    yuna = Child("오윤아")
    yoonsuk = Child("오윤석")

    daddy.add_observer(yuna)
    daddy.add_observer(yoonsuk)

    daddy.say_something("뒤에 가서 봐라~")

    daddy.remove_observer(yuna)

    daddy.say_something("어허~")

run()
