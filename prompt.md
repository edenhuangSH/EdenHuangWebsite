
# Prompt 1

Create a personal website for Eden Huang similar to the https://gao-jin.com/ (Jin Gao)

Sections: 
- Tech (for tools I develop)
- Insights (for industry research from various fields)
- Stories (for stories and articles I would like to share) 
- About Me
- Links (similar to the display of Jin Gao's website)
    - LinkedIn: https://www.linkedin.com/in/eden-huang/
    - GitHub: https://github.com/edenhuangSH
    - Instagram: https://www.instagram.com/edenhuangmn/

I'll use Vercel to deploy the websites thru GitHub

GitHub repo for the website: https://github.com/edenhuangSH/EdenHuangWebsite

------------------------------------------------------------------------------------------------------------------

# Prompt 2

Polish the website with all of these details:

Basic bio:
- LinkedIn: https://www.linkedin.com/in/eden-huang/
- This is the company website: 
- This is the pre-A round deck: data/pre-A轮投资方案.pdf (make sure no clear business propriety information is leaked). 

Additionally, below is a Cursor-ready structured file you can drop into your repo as:
- /data/content/bio.md
- /data/content/profile.json
- /data/content/site-config.md

This is written so your AI tools can understand your positioning clearly.

- New for Tech:

You can also mention that I enjoy vibe-coding. In particular, I like to develop utilities tools for my own startup, and create valuable products for friends to use on a daily basis. For example, this AI Research Assistant can be my first featured tool: /Users/edenhuangsh/Documents/dev-projects/others/hpv-detection(Github: https://github.com/edenhuangSH/personal-research-assistant). 

First polish the Tech sector with my hobbies and then put the AI Research Assistant as the first capstone project. 


- New for Tech:

This another product I built for my brother-in law. You can find the complete repo here: /Users/edenhuangsh/Documents/dev-projects/tomtor-ai (Github: https://github.com/edenhuangSH/tomtor-ai). The business deck is here: data/tech/Democratizing_Elite_Math.pdf. 

This another product I built for my wife. You can find the complete repo here: /Users/edenhuangsh/Documents/dev-projects/Weari(Github: https://github.com/edenhuangSH/weari). The business deck is here: data/tech/Identity_Intelligence_Platform.pdf. 


------------------------------------------------------------------------------------------------------------------

# Prompt 3

- Research and Stories:

Raw content are all in the folder: data/content/articles. Now going through all these articles holistically and then individually, decide what content should fall under Research and what on Stories. Modify the format of the content accordingly to match the overall design of the website. If audio or video, then embed it on the website. 


------------------------------------------------------------------------------------------------------------------

Why there're so many "Coming soon" under Insights? You should move those content to the website.

Also, the reading experience of Insights and Stories is not good -- each piece should have tag(s) and then grouped into different topics (each can include multiple tags). Perhaps apply the second degree of side-bar for sub-topics. Make the UI look professional

A new article is released! Make sure you feature it on Stories since this is the most recent: data/content/articles/ai-ethics/AI Adoption Is Less About Technology.docx

------------------------------------------------------------------------------------------------------------------

Create a feature to let users subscribe to new articles, insights and tech release as well as weekly newsletter. I need to have a flexibility to decide whether the release will be announced to the audience and in what format.

Back to the Resend setup. I cannot find the information for the following:

"
RESEND_API_KEY          re_GECERqLp_NKz8RHjvnDR2joHVUsQbMs63
RESEND_AUDIENCE_ID      10790196-15b2-461b-a1be-f74cee8e343d
FROM_EMAIL              Eden Huang <onboarding@resend.dev>
ADMIN_SECRET            Fyc!19890000
NEXT_PUBLIC_BASE_URL    https://eden-huang.vercel.app
"

For each content, add a "share this" (or whatever language -- make it professional) functionality to share to mainstream channels and text messages (don't be too overwhelming tho)

