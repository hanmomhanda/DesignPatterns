class State:
    def apply_next_state(self, context):
        pass

class On(State):
    def __init__(self):
        self.next_state = Off()
    def apply_next_state(self, context):
        context.set_state(self.next_state)
        print "====== Light goes Off"

class Off(State):
    def __init__(self):
        self.next_state = On()
    def apply_next_state(self, context):
        context.set_state(self.next_state)
        print "Light goes ON ======"

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