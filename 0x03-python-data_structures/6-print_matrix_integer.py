#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        for i in row:
            if i != row[0]:
                print(" ", end='')
            print("{}".format(row[i]), end=" ")
        print()
