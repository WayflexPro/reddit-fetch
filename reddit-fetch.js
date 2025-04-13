/*


 _       __   ___   __  __   ______   __       ______   _  __
| |     / /  /   |  \ \/ /  / ____/  / /      / ____/  | |/ /
| | /| / /  / /| |   \  /  / /_     / /      / __/     |   / 
| |/ |/ /  / ___ |   / /  / __/    / /___   / /___    /   |  
|__/|__/  /_/  |_|  /_/  /_/      /_____/  /_____/   /_/|_|  
                                                                 
*/

// Name: Reddit Fetcher Extended
// ID: redditfetcherextended
// Description: Provides a set of blocks to perform AES encryption/decryption, hash generation (SHA256, MD5), encoding/decoding (Base64, hex), and random key generation using the CryptoJS library.
// By: Wayflex <https://scratch.mit.edu/users/KEDeX/>
// License: GPL-3.0

class RedditFetcherExtended {
  getInfo() {
    return {
      id: 'redditfetcherextended',
      name: 'Reddit Fetcher Extended',
      menuIconURI: "data:image/png;base64,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",
      color1: "#FF4500",
      color2: "#FFA500",
      color3: "#FF4500",
      blocks: [
        {
          opcode: 'fetchSubreddit',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch subreddit [SUBREDDIT]',
          arguments: {
            SUBREDDIT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'popular'
            }
          }
        },
        {
          opcode: 'redditSearch',
          blockType: Scratch.BlockType.REPORTER,
          text: 'reddit search [QUERY]',
          arguments: {
            QUERY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'news'
            }
          }
        },
        {
          opcode: 'isRedditOnline',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'reddit is online?'
        },
        {
          opcode: 'getPostTitle',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get post title from [JSON] index [INDEX]',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            },
            INDEX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'getPostURL',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get post URL from [JSON] index [INDEX]',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            },
            INDEX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'getPostCount',
          blockType: Scratch.BlockType.REPORTER,
          text: 'number of posts in [JSON]',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            }
          }
        },
        {
          opcode: 'hasPosts',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'does [JSON] have posts?',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            }
          }
        },
        {
          opcode: 'logRedditJSON',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log reddit JSON [JSON]',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            }
          }
        },
        {
          opcode: 'jsonToText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [JSON] to text',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            }
          }
        },
        {
          opcode: 'fetchSubredditSorted',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch subreddit [SUBREDDIT] sorted by [SORT]',
          arguments: {
            SUBREDDIT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'popular'
            },
            SORT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'SORT_MENU'
            }
          }
        },
        {
          opcode: 'fetchSubredditTopTime',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch subreddit [SUBREDDIT] top posts from [TIME]',
          arguments: {
            SUBREDDIT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'popular'
            },
            TIME: {
              type: Scratch.ArgumentType.STRING,
              menu: 'TIME_MENU'
            }
          }
        },
        {
          opcode: 'fetchComments',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch comments for post [POSTID]',
          arguments: {
            POSTID: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 't3_example'
            }
          }
        },
        {
          opcode: 'getPostUpvotes',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get post upvotes from [JSON] index [INDEX]',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            },
            INDEX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'getPostAuthor',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get post author from [JSON] index [INDEX]',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            },
            INDEX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'fetchSubredditAbout',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch subreddit info for [SUBREDDIT]',
          arguments: {
            SUBREDDIT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'popular'
            }
          }
        },
        {
          opcode: 'getSubredditSubscribers',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get subscriber count from [JSON] (subreddit info)',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            }
          }
        },
        {
          opcode: 'getSubredditDescription',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get description from [JSON] (subreddit info)',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            }
          }
        },
        {
          opcode: 'isPostNSFW',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is post NSFW from [JSON] index [INDEX]?',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            },
            INDEX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'fetchUserInfo',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch user info for [USERNAME]',
          arguments: {
            USERNAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'reddit'
            }
          }
        },
        {
          opcode: 'getUserCommentKarma',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get comment karma from [JSON] (user info)',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            }
          }
        },
        {
          opcode: 'getUserLinkKarma',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get link karma from [JSON] (user info)',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            }
          }
        },
        {
          opcode: 'fetchRandomSubreddit',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch random subreddit'
        },
        {
          opcode: 'listPostTitles',
          blockType: Scratch.BlockType.REPORTER,
          text: 'list all post titles from [JSON]',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            }
          }
        },
        {
          opcode: 'fetchPopularSubreddits',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch popular subreddits'
        },
        {
          opcode: 'getPostID',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get post id from [JSON] index [INDEX]',
          arguments: {
            JSON: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            },
            INDEX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        }
      ],
      menus: {
        SORT_MENU: {
          acceptReporters: true,
          items: ['hot', 'new', 'top', 'rising', 'controversial']
        },
        TIME_MENU: {
          acceptReporters: true,
          items: ['all', 'day', 'hour', 'week', 'month', 'year']
        }
      }
    };
  }
  async fetchSubreddit(args) {
    const subreddit = args.SUBREDDIT;
    try {
      const response = await fetch(`https://www.reddit.com/r/${encodeURIComponent(subreddit)}/hot.json`);
      const json = await response.json();
      return JSON.stringify(json);
    } catch (e) {
      return "Error: " + e;
    }
  }
  async redditSearch(args) {
    const query = args.QUERY;
    try {
      const response = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(query)}`);
      const json = await response.json();
      return JSON.stringify(json);
    } catch (e) {
      return "Error: " + e;
    }
  }
  async isRedditOnline() {
    try {
      const response = await fetch("https://www.reddit.com/");
      return response.ok;
    } catch (e) {
      return false;
    }
  }
  getPostTitle(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && Array.isArray(data.data.children) && data.data.children.length > args.INDEX) {
        return data.data.children[args.INDEX].data.title;
      }
      return "";
    } catch (e) {
      return "Error: " + e;
    }
  }
  getPostURL(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && Array.isArray(data.data.children) && data.data.children.length > args.INDEX) {
        return data.data.children[args.INDEX].data.url;
      }
      return "";
    } catch (e) {
      return "Error: " + e;
    }
  }
  getPostCount(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && Array.isArray(data.data.children)) {
        return data.data.children.length;
      }
      return 0;
    } catch (e) {
      return 0;
    }
  }
  hasPosts(args) {
    try {
      const data = JSON.parse(args.JSON);
      return (data && data.data && Array.isArray(data.data.children) && data.data.children.length > 0);
    } catch (e) {
      return false;
    }
  }
  logRedditJSON(args) {
    console.log("Reddit JSON:", args.JSON);
  }
  jsonToText(args) {
    try {
      const parsed = JSON.parse(args.JSON);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      return "Invalid JSON";
    }
  }
  async fetchSubredditSorted(args) {
    const subreddit = args.SUBREDDIT;
    const sort = args.SORT;
    try {
      const response = await fetch(`https://www.reddit.com/r/${encodeURIComponent(subreddit)}/${sort}.json`);
      const json = await response.json();
      return JSON.stringify(json);
    } catch (e) {
      return "Error: " + e;
    }
  }
  async fetchSubredditTopTime(args) {
    const subreddit = args.SUBREDDIT;
    const time = args.TIME;
    try {
      const response = await fetch(`https://www.reddit.com/r/${encodeURIComponent(subreddit)}/top.json?t=${encodeURIComponent(time)}`);
      const json = await response.json();
      return JSON.stringify(json);
    } catch (e) {
      return "Error: " + e;
    }
  }
  async fetchComments(args) {
    const postId = args.POSTID;
    try {
      const response = await fetch(`https://www.reddit.com/comments/${encodeURIComponent(postId)}.json`);
      const json = await response.json();
      return JSON.stringify(json);
    } catch (e) {
      return "Error: " + e;
    }
  }
  getPostUpvotes(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && Array.isArray(data.data.children) && data.data.children.length > args.INDEX) {
        return data.data.children[args.INDEX].data.score;
      }
      return 0;
    } catch (e) {
      return 0;
    }
  }
  getPostAuthor(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && Array.isArray(data.data.children) && data.data.children.length > args.INDEX) {
        return data.data.children[args.INDEX].data.author;
      }
      return "";
    } catch (e) {
      return "Error: " + e;
    }
  }
  async fetchSubredditAbout(args) {
    const subreddit = args.SUBREDDIT;
    try {
      const response = await fetch(`https://www.reddit.com/r/${encodeURIComponent(subreddit)}/about.json`);
      const json = await response.json();
      return JSON.stringify(json);
    } catch (e) {
      return "Error: " + e;
    }
  }
  getSubredditSubscribers(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && typeof data.data.subscribers !== 'undefined') {
        return data.data.subscribers;
      }
      return 0;
    } catch (e) {
      return 0;
    }
  }
  getSubredditDescription(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && data.data.public_description) {
        return data.data.public_description;
      }
      return "";
    } catch (e) {
      return "Error: " + e;
    }
  }
  isPostNSFW(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && Array.isArray(data.data.children) && data.data.children.length > args.INDEX) {
        return !!data.data.children[args.INDEX].data.over_18;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  async fetchUserInfo(args) {
    const username = args.USERNAME;
    try {
      const response = await fetch(`https://www.reddit.com/user/${encodeURIComponent(username)}/about.json`);
      const json = await response.json();
      return JSON.stringify(json);
    } catch (e) {
      return "Error: " + e;
    }
  }
  getUserCommentKarma(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && typeof data.data.comment_karma !== 'undefined') {
        return data.data.comment_karma;
      }
      return 0;
    } catch (e) {
      return 0;
    }
  }
  getUserLinkKarma(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && typeof data.data.link_karma !== 'undefined') {
        return data.data.link_karma;
      }
      return 0;
    } catch (e) {
      return 0;
    }
  }
  async fetchRandomSubreddit() {
    try {
      const response = await fetch("https://www.reddit.com/r/random.json");
      const json = await response.json();
      return JSON.stringify(json);
    } catch (e) {
      return "Error: " + e;
    }
  }
  listPostTitles(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && Array.isArray(data.data.children)) {
        let titles = data.data.children.map(child => child.data.title);
        return titles.join("\n");
      }
      return "";
    } catch (e) {
      return "Error: " + e;
    }
  }
  async fetchPopularSubreddits() {
    try {
      const response = await fetch("https://www.reddit.com/subreddits/popular.json");
      const json = await response.json();
      return JSON.stringify(json);
    } catch (e) {
      return "Error: " + e;
    }
  }
  getPostID(args) {
    try {
      const data = JSON.parse(args.JSON);
      if (data && data.data && Array.isArray(data.data.children) && data.data.children.length > args.INDEX) {
        return data.data.children[args.INDEX].data.name;
      }
      return "";
    } catch (e) {
      return "Error: " + e;
    }
  }
}
Scratch.extensions.register(new RedditFetcherExtended());
