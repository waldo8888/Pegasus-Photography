import React from 'react';
import { Box, Container, Typography, Chip, Stack, Paper, Button, Divider, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MotionBox = motion(Box);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const articles = [
    {
        id: 1,
        slug: 'what-to-wear-senior-photos',
        title: 'What to Wear for Senior Photos: Your Ultimate Guide',
        category: 'For Seniors',
        date: 'Feb 1, 2026',
        readTime: '5 min read',
        image: '/images/blog/what-to-wear.jpg',
        author: { name: 'Sarah Mitchell', role: 'Senior Portrait Specialist', avatar: '/images/team/sarah.jpg' },
        content: `
## Why Your Outfit Matters
Your senior photos are a snapshot of who you are right now. The outfits you choose can make or break the final result. Here's everything you need to know to look your absolute best.

## The Golden Rules
### 1. Solid Colors Are Your Best Friend
Busy patterns, logos, and graphics distract from your face. Stick to solid, rich colors like:
- **Jewel tones**: emerald, sapphire, ruby
- **Earth tones**: rust, olive, camel
- **Neutrals**: cream, navy, charcoal

### 2. Dress in Layers
Layers add dimension to your photos and give you options during your session. Think:
- Blazers or jackets over simple tops
- Cardigans or denim jackets
- Scarves for fall sessions

### 3. Bring Multiple Outfits
Most sessions allow for 2-3 outfit changes. Mix it up with:
- One casual look (jeans + nice top)
- One dressy look (dress or suit)
- One "you" look (sports gear, band tee, etc.)

## Ready to Book?
Now that you know what to wear, it's time to schedule your session!`
    },
    {
        id: 2,
        slug: 'picture-day-tips-parents',
        title: '10 Picture Day Tips Every Parent Should Know',
        category: 'For Parents',
        date: 'Jan 28, 2026',
        readTime: '4 min read',
        image: '/images/gallery/family-portraits-1.jpg',
        author: { name: 'David Chen', role: 'School Photography Director', avatar: '/images/team/david.jpg' },
        content: `
## Preparing for Picture Day
Picture day is a big deal! You want your child to look their best, but you also want them to feel comfortable and happy. Here are our top 10 tips for a stress-free picture day.

## The Top 10 Tips

### 1. Plan the Outfit in Advance
Don't wait until the morning of specific. Choose an outfit your child feels comfortable in. Avoid itchy fabrics or overly tight collars.

### 2. Avoid Large Logos and Graphics
Slogans and cartoon characters can be distracting and date the photo. Solid colors or simple patterns work best.

### 3. Get a Good Night's Sleep
A well-rested child is a happy child. Ensure they get to bed on time the night before.

### 4. Practice Smiles
Practice in the mirror! Encouraging a natural "happy face" rather than a forced "cheese" can make a huge difference.

### 5. Tame the Hair
If your child needs a haircut, schedule it about a week before picture day. on the day of, use a little product to tame flyaways, but keep it natural.

### 6. Neutral Colors Work Best
Bright neons can reflect color onto skin tones. Blues, greens, and warm earth tones are generally very flattering.

### 7. Glasses Glare
If your child wears glasses, see if your eye doctor can lend a pair of frames without lenses to avoid glare, or just ensure they are clean and adjusted properly.

### 8. Don't Stress!
Children pick up on your energy. If you are relaxed and positive about picture day, they will be too.

### 9. Check the Schedule
Know exactly what day (and time, if possible) pictures are being taken so you don't send them in their gym clothes!

### 10. Let Their Personality Shine
The best photos capture your child's true spirit. Don't worry about perfection; worry about capturing *them*.`
    },
    {
        id: 3,
        slug: 'choosing-school-photographer',
        title: 'How Schools Can Choose the Right Photography Partner',
        category: 'For Schools',
        date: 'Jan 20, 2026',
        readTime: '6 min read',
        image: '/images/gallery/school-group-1.jpg',
        author: { name: 'Emily White', role: 'Account Manager', avatar: '/images/team/emily.jpg' },
        content: `
## Finding the Perfect Partner
Choosing a photographer for your school district is a big decision. It's not just about taking pictures; it's about managing logistics, handling data securely, and delivering a great experience for parents and staff.

## Key Factors to Consider

### 1. Reliability and Track Record
Look for a company with a proven history of delivering on time. Ask for references from other schools of similar size. Can they handle the volume of your student body smoothly?

### 2. Technology and Data Integration
Modern school photography requires seamless data integration. Does the photographer's system integrate with your Student Information System (SIS) for ID cards and yearbooks?

### 3. Customer Service for Parents
You don't want your front office fielded calls about missing photo packages. Choose a partner that offers robust, direct-to-parent customer support.

### 4. Quality and Variety
Review their portfolio. Do the photos look consistent? do they offer a variety of backgrounds and poses to give parents choices?

### 5. Staff Support
A good partner supports your staff too. This includes providing ID badges, administrative software for tracking images, and complimentary staff photos.

## The Pegasus Difference
At Pegasus, we pride ourselves on being more than just vendors; we are partners. We maximize efficiency on picture day so you can get back to teaching.`
    },
    {
        id: 4,
        slug: 'senior-portrait-locations',
        title: '15 Stunning Senior Portrait Locations in Your City',
        category: 'For Seniors',
        date: 'Jan 15, 2026',
        readTime: '7 min read',
        image: '/images/gallery/senior-outdoor-1.jpg',
        author: { name: 'Sarah Mitchell', role: 'Senior Portrait Specialist', avatar: '/images/team/sarah.jpg' },
        content: `
## Location, Location, Location
The backdrop sets the mood for your entire session. Whether you want an urban vibe, a nature-filled escape, or a classic architectural feel, our city has it all. Here are 15 of our favorite spots.

## Urban & Modern

### 1. Downtown Arts District
Colorful murals, brick alleyways, and industrial textures make this perfect for edgy, modern looks.

### 2. The Glass Walkway
For sleek lines and reflections, the glass walkway near the convention center is unbeatable.

### 3. Old Market Rooftops
Capture the skyline at sunset from the top of the Old Market parking structures.

### 4. Historic Post Office Steps
Grand marble columns and wide stairs offer a timeless, sophisticated urban feel.

### 5. The Steel Bridge
 rivets, beams, and river views provide a strong, structural background.

## Nature & Parks

### 6. Whispering Pines Park
Tall pine trees offer year-round greenery and a secluded, magical forest vibe.

### 7. Botanical Gardens
From manicured floral beds to the Japanese garden, this location offers variety within a small walking distance.

### 8. Riverfront Landing
Tall grasses, the river bank, and drift wood make for a relaxed, organic setting.

### 9. Sunflower Fields (Seasonal)
In late summer, the sunflower fields just outside town are a breathtaking wash of yellow.

### 10. The Waterfall at High Rock
A bit of a hike, but the natural stone and falling water create a dramatic backdrop.

## Classic & Architectural

### 11. State University Campus
Gothic arches, brick ivy walls, and manicured quads offer a collegiate, preppy look.

### 12. The Library Courtyard
Stone fountains and benches provide a quiet, elegant setting.

### 13. Union Station
The grand hall with its high ceilings and vintage lighting is perfect for formal attire.

### 14. Heritage Museum Grounds
White pillars and symmetrical landscaping give a clean, high-end aesthetic.

### 15. Your High School Stadium
For athletes, nothing beats the bleachers or the 50-yard line under the friday night lights.`
    },
    {
        id: 5,
        slug: 'props-senior-photos',
        title: 'Creative Props for Unique Senior Photos',
        category: 'For Seniors',
        date: 'Jan 10, 2026',
        readTime: '5 min read',
        image: '/images/gallery/sports-team-1.jpg',
        author: { name: 'Mike Ross', role: 'Creative Director', avatar: '/images/team/mike.jpg' },
        content: `
## Personalizing Your Session
Props are a great way to show off your personality and interests. They give you something to do with your hands and help tell the story of your high school career.

## Ideas to Get You Started

### 1. Sports Gear
Bring your jersey, helmet, bat, ball, or stick. Action shots or moody locker room style portraits are always a hit.

### 2. Musical Instruments
From a guitar slung over your shoulder to a saxophone or violin. Music is a huge part of your life—show it off!

### 3. Your Car or Truck
If you love your ride, let's include it! Lean against the hood, sit in the trunk, or shoot through the window.

### 4. Books & Art Supplies
For the intellectuals and artists: a stack of your favorite novels, a sketchbook, or paint brushes can create a beautiful, pensive mood.

### 5. College Swag
Accepted to your dream school? Bring a pennant, hoodie, or flag to announce your next chapter.

### 6. Pets
Yes, we love furry friends! Bring your dog for a few shots. Just bring a handler to hold them while we do solo portraits.

### 7. Balloons or Confetti
For a fun, celebratory vibe. (Please note: we use biodegradable confetti only!)

## Tips for Props
- **Keep it meaningful**: Don't bring random items. Choose things that really represent YOU.
- **Clean them up**: Make sure your instrument is polished, your jersey is ironed, and your car is washed.
- **Limit the quantity**: 1-3 key props is usually plenty. You don't want the session to become just about the stuff.`
    },
    {
        id: 6,
        slug: 'yearbook-design-trends',
        title: '2026 Yearbook Design Trends to Watch',
        category: 'For Schools',
        date: 'Jan 5, 2026',
        readTime: '4 min read',
        image: '/images/yearbook-cover.jpg',
        author: { name: 'Jessica Lee', role: 'Yearbook Specialist', avatar: '/images/team/jessica.jpg' },
        content: `
## What's Trending in 2026?
School yearbooks are evolving giving way to new design trends that reflect the aesthetic of Generation Alpha. Here is what is hot in yearbook design for 2026.

## 1. Minimalist Typography
Say goodbye to clutter. Big, bold, sans-serif fonts are in. Think magazine-style headlines that make a statement with fewer words.

## 2. Scrapbook Aesthetic 2.0
While digital precision is key, the "hand-made" look is back. Digital stickers, tape overlays, and paper textures add a nostalgic, tactile feel to the pages.

## 3. Interactive Elements
QR codes are becoming standard. Link printed photos to video highlights of the game, the choir concert, or graduation speeches. It makes the yearbook a multimedia experience.

## 4. Color Blocking
Vibrant, solid blocks of color are being used to separate sections and frame photos. High contrast palettes (like neon on black) are particularly popular.

## 5. First-Person Narratives
Instead of generic captions, schools are moving towards varied storytelling. Quotes and short first-person stories from students give the book a more authentic voice.

## 6. Candid Over Posed
The ratio of candid "action" shots to posed group photos is shifting. Students want to remember the moments between the moments.`
    },
    {
        id: 7,
        slug: 'behind-the-scenes-photo-session',
        title: 'Behind the Scenes: A Senior Photo Session',
        category: 'For Seniors',
        date: 'Dec 28, 2025',
        readTime: '3 min read',
        image: '/images/blog/senior-tips.jpg',
        author: { name: 'Sarah Mitchell', role: 'Senior Portrait Specialist', avatar: '/images/team/sarah.jpg' },
        content: `
## A Look Behind the Lens
Ever wondered what goes into a professional photo shoot? It is not just about showing up and smiling. Here is a peek at the Pegasus process.

## The Pre-Consultation
We start with a chat before the camera ever comes out. We discuss your style, locations, and what you want your photos to say about you.

## On Location
When we arrive, we scout the light. Good lighting is 90% of a great photo. We look for soft shade, golden hour sun flairs, and clean backgrounds.

## The Shoot
During the session, I'll guide you through poses. "Chin down," "laugh at me," "walk towards the camera." I keep it moving so you don't have time to feel awkward. I'm constantly checking the back of the camera to make sure we're getting "the shot."

## Styling Adjustments
We are always watching for stray hairs, twisted necklaces, or wrinkled shirts. It's the little details that separate a pro photo from a snapshot.

## Post-Processing
After the shoot, the real work begins. We cull the images (selecting the best ones), color correct them, and apply our signature editing style.

## The Reveal
This is our favorite part! Showing you the final images and seeing your reaction. We help you choose your favorites for your album or wall art.`
    },
    {
        id: 8,
        slug: 'graduation-portraits-guide',
        title: 'The Complete Guide to Graduation Portraits',
        category: 'For Seniors',
        date: 'Dec 20, 2025',
        readTime: '6 min read',
        image: '/images/gallery/graduation-1.jpg',
        author: { name: 'Sarah Mitchell', role: 'Senior Portrait Specialist', avatar: '/images/team/sarah.jpg' },
        content: `
## Celebrating Your Achievement
Graduation is a major milestone. It marks the end of an era and the beginning of a new adventure. Capture it perfectly with these tips for your cap and gown session.

## Timing is Everything
Don't wait until graduation day! It's chaotic, hot, and crowded. Schedule a separate "Cap & Gown" mini-session a few weeks before or after the ceremony. You'll be more relaxed and we'll have better light.

## What to Wear Underneath
Remember that your gown will open as you walk.
- **Guys**: Wear a collared shirt and tie. It looks sharp showing at the top.
- **Girls**: A dress that is shorter than the gown avoids awkward hemline clashes. Or, wear nice pants and heels.

## The Cap (Mortarboard)
- **Decoration**: If you decorate your cap, bring it! It's a great personal touch.
- **Hair**: Hat hair is real. Plan a hairstyle that works well under a cap (loose waves or a low bun). bring bobby pins to secure it.

## Key Poses We Capture
1. **The Tassel Turn**: Action shot of moving the tassel.
2. **The Cap Toss**: A classic celebration shot (we usually do a few takes of this!).
3. **Holding the Diploma**: We have prop diplomas if you don't have yours yet.
4. **Walking Away**: Back shot showing "Class of 2026" on your sash or gown.

## Family Photos
This is a proud moment for your parents too. Bring them along for a few shots with you in your gown. They'll cherish those photos forever.`
    }
];

const BlogPost = () => {
    const { slug } = useParams();
    const article = articles.find(a => a.slug === slug) || articles[0];

    return (
        <Box>
            {/* Hero Image */}
            <Box sx={{
                position: 'relative',
                height: { xs: '40vh', md: '50vh' },
                bgcolor: '#111'
            }}>
                <Box
                    component="img"
                    src={article.image}
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.6
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)'
                }} />
            </Box>

            {/* Article Content */}
            <Container maxWidth="md" sx={{ mt: -15, position: 'relative', zIndex: 1, pb: 8 }}>
                <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                    {/* Back Link */}
                    <Button
                        component={Link}
                        to="/blog"
                        startIcon={<ArrowBackIcon />}
                        sx={{ color: 'white', mb: 3, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                    >
                        Back to Blog
                    </Button>

                    <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
                        {/* Category & Meta */}
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                            <Chip label={article.category} color="primary" sx={{ fontWeight: 600 }} />
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <CalendarTodayIcon sx={{ fontSize: 16 }} /> {article.date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <AccessTimeIcon sx={{ fontSize: 16 }} /> {article.readTime}
                            </Typography>
                        </Stack>

                        {/* Title */}
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                            {article.title}
                        </Typography>

                        {/* Author */}
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                            <Avatar src={article.author.avatar} sx={{ width: 48, height: 48 }} />
                            <Box>
                                <Typography variant="subtitle1" fontWeight={700}>{article.author.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{article.author.role}</Typography>
                            </Box>
                        </Stack>

                        <Divider sx={{ mb: 4 }} />

                        {/* Article Body */}
                        <Box sx={{
                            '& h2': {
                                fontSize: '1.75rem',
                                fontWeight: 700,
                                mt: 4,
                                mb: 2,
                                color: 'text.primary'
                            },
                            '& h3': {
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                mt: 3,
                                mb: 1,
                                color: 'text.primary'
                            },
                            '& p': {
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                mb: 2,
                                color: 'text.secondary'
                            },
                            '& ul, & ol': {
                                pl: 3,
                                mb: 2
                            },
                            '& li': {
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                mb: 1,
                                color: 'text.secondary'
                            },
                            '& strong': {
                                color: 'text.primary',
                                fontWeight: 600
                            }
                        }}>
                            {article.content.split('\n').map((line, index) => {
                                if (line.startsWith('## ')) {
                                    return <Typography key={index} variant="h2">{line.replace('## ', '')}</Typography>;
                                } else if (line.startsWith('### ')) {
                                    return <Typography key={index} variant="h3">{line.replace('### ', '')}</Typography>;
                                } else if (line.startsWith('- ')) {
                                    return <Typography key={index} component="li">{line.replace('- ', '')}</Typography>;
                                } else if (line.trim()) {
                                    return <Typography key={index} paragraph>{line}</Typography>;
                                }
                                return null;
                            })}
                        </Box>

                        <Divider sx={{ my: 4 }} />

                        {/* Share Section */}
                        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" flexWrap="wrap">
                            <Typography variant="h6" fontWeight={600}>
                                <ShareIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Share this article
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Button variant="outlined" size="small" startIcon={<FacebookIcon />}>
                                    Facebook
                                </Button>
                                <Button variant="outlined" size="small" startIcon={<TwitterIcon />}>
                                    Twitter
                                </Button>
                                <Button variant="outlined" size="small" startIcon={<LinkedInIcon />}>
                                    LinkedIn
                                </Button>
                            </Stack>
                        </Stack>
                    </Paper>

                    {/* CTA */}
                    <Paper sx={{ mt: 4, p: 4, borderRadius: 4, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            Ready to Book Your Senior Session?
                        </Typography>
                        <Typography sx={{ opacity: 0.9, mb: 3 }}>
                            Now that you're prepped and ready, let's capture your story.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            component={Link}
                            to="/for-seniors"
                            sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                        >
                            View Senior Packages
                        </Button>
                    </Paper>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default BlogPost;
