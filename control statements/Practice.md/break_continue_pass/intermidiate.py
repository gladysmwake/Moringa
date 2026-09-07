usernames = ['admin_user', 'user1', 'user2','admin_user3', 'user3', 'user4']

for username in usernames:
    if 'admin' in username:
        print(f"{username} is an admin user")
        continue
    print(f"{username} is a regular user")