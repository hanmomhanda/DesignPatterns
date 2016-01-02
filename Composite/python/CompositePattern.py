class Component:
    def __init__(self, name):
        self.name = name

    def get_value(self):
        pass


class Leaf(Component):
    def __init__(self, name):
        Component.__init__(self, name)

    def get_value(self):
        return "(" + self.name + ")"


class Composite(Component):
    def __init__(self, name):
        Component.__init__(self, name)
        self.components = []

    def add(self, component):
        self.components.append(component)
        return self

    def get_value(self):
        result = self.name + ":[" + ','.join(x.get_value() for x in self.components) + ']'
        return result


def run():
    """

    :rtype: None
    """
    leaf1 = Leaf("leaf1")
    leaf2 = Leaf("leaf2")
    leaf3 = Leaf("leaf3")
    leaf4 = Leaf("leaf4")

    composite1 = Composite("composite1")
    composite2 = Composite("composite2")

    composite3 = Composite("composite3")

    composite1.add(leaf1).add(leaf2)
    composite2.add(leaf3).add(leaf4)

    composite3.add(leaf1)
    composite3.add(composite1)
    composite3.add(leaf2).add(leaf3)
    composite3.add(composite2)
    composite3.add(leaf4)

    result = composite3.get_value()

    print result

run()
