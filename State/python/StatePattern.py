class State:
    def apply_next_state(self, context):
        pass

"""
On과 Off가 상호 참조를 하게류되서 무한루프 발생
이 문제를 해결하려면 싱글턴 패턴이 필요한데,
파이썬 싱글턴 패턴은 나름 선수지식이 더 필요해서 일단 보류
"""

class On(State):

    def __init__(self):
        self.next_state = Off()
    def apply_next_state(self, context):
        context.set_state(self.next_state)
        print("====== Light goes Off")

class Off(State):
    def __init__(self):
        self.next_state = On()
    def apply_next_state(self, context):
        context.set_state(self.next_state)
        print("Light goes ON ======")

class Light:
    def __init__(self):
        self.state = Off()
    def set_state(self, state):
        self.state = state
    def trigger_state_change(self):
        self.state.apply_next_state(self)

def run():
    light = Light()

    light.trigger_state_change()
    light.trigger_state_change()
    light.trigger_state_change()

    light.trigger_state_change()
    light.trigger_state_change()
    light.trigger_state_change()

run()