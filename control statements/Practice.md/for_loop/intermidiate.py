original_list = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"]

uniques = []
for word in original_list:
    if len(word) > 4:
        uniques.append(word)
print(uniques)