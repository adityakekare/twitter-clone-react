import tweetsJson from './data/tweets.json';

// console.log(tweetsJson);
const tweets = (state = tweetsJson, action) => {
    console.log(action.tweet);
    switch (action.type) {
        case 'fetch-all-tweets':
            return(
                action.tweets
            )

        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });

        case 'delete-tweet':
            console.log(action.tweet._id);
            return state.filter(tweet => tweet._id !== action.tweet._id);

        case 'create-tweet':
            if(action.tweet.tweet === undefined){
                return action.tweet;
            }
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "../../../images/react-blue.png",
                "logo-image": "../../../images/react-blue.png",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            return ([
                    tweet,
                    ...state,
                ]
            );
            break;
        default:
            return(state);
    }
};

export default tweets;
