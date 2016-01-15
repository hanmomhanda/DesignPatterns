class Element:
    def __init__(self, name):
        self.name = name

    def accept(self, visitor):
        visitor(self)

    def do_element_thing(self):
        raise NotImplementedError


class BracketElement(Element):
    def __init__(self, name):
        super().__init__(name)

    def do_element_thing(self):
        return "<" + self.name + ">"


class CurlyBraceElement(Element):
    def __init__(self, name):
        super().__init__(name)

    def do_element_thing(self):
        return "{" + self.name + "}"


def lowercase_visitor(element):
    print("ElementName : " + element.do_element_thing().lower())


def uppercase_visitor(element):
    print("ElementName : " + element.do_element_thing().upper())


def run():
    elements = [
        BracketElement('Bracket1'),
        CurlyBraceElement('CurlyBrace11'),
        CurlyBraceElement('CurlyBrace12'),
        BracketElement('Bracket2'),
        CurlyBraceElement('CurlyBrace13'),
        BracketElement('Bracket3'),
        BracketElement('Bracket4')
    ]

    print("========== Lowercase Visitor ==========")

    for item in elements:
        item.accept(lowercase_visitor)

    print("========== Uppercase Visitor ==========")

    for item in elements:
        item.accept(uppercase_visitor)


run()
