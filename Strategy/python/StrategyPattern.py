class Fighter:
    move_strategy = None
    attack_strategy = None

    def __init__(self):
        self.move_strategy = None
        self.attack_strategy = None

    def set_move_strategy(self, move_strategy):
        self.move_strategy = move_strategy

    def set_attack_strategy(self, attack_strategy):
        self.attack_strategy = attack_strategy

    def move(self):
        self.move_strategy()

    def attack(self):
        self.attack_strategy()



def flying_strategy():
    print "FLYING..."

def walking_strategy():
    print "WALKING..."

def crawling_strategy():
    print "CRAWLING..."



def kick_strategy():
    print "kick!!!"

def punch_strategy():
    print "punch!!!"

def tackle_strategy():
    print "tackle!!!"



def run():
    fighter = Fighter()

    fighter.set_move_strategy(flying_strategy)
    fighter.set_attack_strategy(kick_strategy)
    print "===== Flying + Kick ====="
    fighter.move()
    fighter.attack()

    fighter.set_move_strategy(walking_strategy)
    fighter.set_attack_strategy(punch_strategy)
    print "===== Walking + Punch ====="
    fighter.move()
    fighter.attack()

    fighter.set_move_strategy(crawling_strategy)
    fighter.set_attack_strategy(tackle_strategy)
    print "===== Crawling + Tackle ====="
    fighter.move()
    fighter.attack()



run()