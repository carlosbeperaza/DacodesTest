# Logic Test
# Carlos Be Peraza

def logic(n, m):
    if m == 1:
        print('R') if n == 1 else print('D')
    elif m > n:
        print('L') if n % 2 == 0 else print('R')
    elif n > m > 1:
        print('U') if m % 2 == 0 else print('D')
    elif m == n > 1:
        print('L') if n % 2 == 0 else print('R')


# init app
if __name__ == '__main__':
    try:
        t_cases = int(input("Please, introduce the number of test cases: "))

        # validate t_cases
        if 1 <= t_cases <= 5000:

            for case in range(t_cases):
                n = int(input(f"Introduce N in case {case+1}: "))
                m = int(input(f"Introduce M in case {case+1}: "))

                if not 1 <= n <= 10 ^ 9 or not 1 <= m <= 10 ^ 9:
                    print('N and M needs be greater than 1 and less 10 ^ 9')
                    exit()

                logic(n, m)

        else:
            print('Number of test cases needs be greater than 1 and less than 5000')
    except ValueError:
        print('Only integer inputs, try again')
