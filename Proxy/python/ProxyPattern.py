class Target:
    def __init__(self, file_name):
        self.file_name = file_name

    def display_image(self):
        pass


class RealTarget(Target):
    def __init__(self, file_name):
        self.file_name = file_name
        print("Loading", file_name)

    def display_image(self):
        print("Displaying", self.file_name)


class Proxy(Target):
    real_target = None

    def __init__(self, file_name):
        self.file_name = file_name

    def display_image(self):
        if self.real_target is None:
            self.real_target = RealTarget(self.file_name)
        self.real_target.display_image()


class Client:
    def __init__(self, target):
        self.target = target

    def do_something_with_target(self):
        self.target.display_image()


def run():
    print("======= Example 1 =======")
    client1 = Client(Proxy("Image01.jpg"))
    client1.do_something_with_target()
    client1.do_something_with_target()
    client1.do_something_with_target()

    print("======= Example 2 =======")
    client2 = Client(Proxy("WallPaper.png"))
    client2.do_something_with_target()
    client2.do_something_with_target()
    client2.do_something_with_target()

run()
