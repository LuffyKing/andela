class Pet:
    def __init__(self, numLegs=4, name='Mike'):
        self.numberOfLegs = numLegs
        self.name = name

    def sleep(self):
        print('zzzZZZZZZ')

    def count_legs(self):
        print('Your pet has {} leg(s)'.format(self.numberOfLegs))

    def sayName(self):
        print('Hey my name is {}'.format(self.name))

    @staticmethod
    def sayers():
        print('Saying')


class Dog(Pet):
    def __init__(self, name='Mike'):
        super(Dog, self).__init__(4, name)
    def bark(self):
        print('WOOF!!!!!')


adog = Dog('swagger')

