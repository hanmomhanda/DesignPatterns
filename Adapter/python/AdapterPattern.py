class Target:
    def print_weak(self):
        raise NotImplementedError

    def print_strong(self):
        raise NotImplementedError


class Adaptee:
    def __init__(self, message):
        self.message = message

    def print_paren(self):
        print("(" + self.message + ")")

    def print_asterisk(self):
        print("*" + self.message + "*")


class Adapter(Target):
    def __init__(self, adaptee):
        self.adaptee = adaptee

    def print_weak(self):
        self.adaptee.print_paren()

    def print_strong(self):
        self.adaptee.print_asterisk()


def run():
    target = Adapter(Adaptee("Adaptee is adpated to Target by Adapter"))
    target.print_weak()
    target.print_strong()

run()
