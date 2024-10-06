def save_profile(backend, user, response, *args, **kwargs):
    name_from_email = user.email.split('@')[0]
    user.username = response.get('login', name_from_email)
    user.save()
