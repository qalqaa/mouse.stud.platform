from social_core.backends.github import GithubOAuth2


class InsecureGithubOAuth2(GithubOAuth2):
    STATE_PARAMETER = False
