class Student:
    school = "Moringa School"
    course = "Software Development"
    duration_months = 6

    def __init__(self, name, age, favourite_language):
        self.name = name
        self.age = age
        self.favourite_language = favourite_language


Student1 = Student("Lady Athena", 20, "Python")
print("=== Student 1 Details ===")
print(f"School: {Student1.school}")
print(f"Course: {Student1.course}")
print(f"Duration: {Student1.duration_months} months")
print(f"Name: {Student1.name}")
print(f"Age: {Student1.age}")
print(f"Favourite Language: {Student1.favourite_language}")
print("-" * 30)

Student2 = Student("Borris Ngugi", 25, "Java")
print("=== Student 2 Details ===")
print(f"School: {Student2.school}")
print(f"Course: {Student2.course}")
print(f"Duration: {Student2.duration_months} months")
print(f"Name: {Student2.name}")
print(f"Age: {Student2.age}")
print(f"Favourite Language: {Student2.favourite_language}")