/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

/**
 * This is a factory definition for an owner
 */
import Mirage/*, { faker } */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  avatar_url() {
    return `https://github.com/images/error/${this.login}.gif`;
  },
  id: (i) => i,
  gravatar_id: "",
  url() {
    return `https://api.github.com/users/${this.login}`;
  },
  html_url() {
    return `https://github.com/${this.login}`;
  },
  followers_url() {
    return `https://api.github.com/users/${this.login}/followers`;
  },
  following_url() {
    return `https://api.github.com/users/${this.login}/following{/other_user}`;
  },
  gists_url() {
    return `https://api.github.com/users/${this.login}/gists{/gist_id}`;
  },
  subscriptions_url() {
    return `https://api.github.com/users/${this.login}/subscriptions`;
  },
  organizations_url() {
    return `https://api.github.com/users/${this.login}/orgs`;
  },
  repos_url() {
    return `https://api.github.com/users/${this.login}/repos`;
  },
  events_url() {
    return `https://api.github.com/users/${this.login}/events{/privacy}`;
  },
  received_events_url() {
    return `https://api.github.com/users/${this.login}/received_events`;
  },
  type: "User",
  site_admin: false,
  name: "monalisa octocat",
  company: "GitHub",
  blog: "https://github.com/blog",
  location: "San Francisco",
  email: "octocat@github.com",
  hireable: false,
  bio: "There once was...",
  public_repos: 2,
  public_gists: 1,
  followers: 20,
  following: 0,
  created_at: "2008-01-14T04:33:35Z",
  updated_at: "2008-01-14T04:33:35Z",
  total_private_repos: 100,
  owned_private_repos: 100,
  private_gists: 81,
  disk_usage: 10000,
  collaborators: 8,
  plan: {
    name: "Medium",
      space: 400,
      private_repos: 20,
      collaborators: 0
  }
});

/* sample
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z",
  "total_private_repos": 100,
  "owned_private_repos": 100,
  "private_gists": 81,
  "disk_usage": 10000,
  "collaborators": 8,
  "plan": {
    "name": "Medium",
      "space": 400,
      "private_repos": 20,
      "collaborators": 0
  }
}
  */
