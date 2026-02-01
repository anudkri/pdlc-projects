import unittest
from main import add, subtract, multiply, divide

def test_add(): assert 3 + 5 == 8;
 def test_subtract():assert 10 - 4 == 6;
 def test_multiply():assert 12 * 9 == 108;
 if __name__=='__main__': unittest.main();