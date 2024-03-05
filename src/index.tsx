import { Hono } from 'hono'
import type { FC } from 'hono/jsx'
import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

const app = new Hono()

//Layout
const Layout: FC = (props) => {
 return (
  <html lang="en">
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <link rel="icon" type="image/x-icon" href="https://static.iotgarden.online/minhuytravel/img/logo.webp" />
   <link rel="preload" as="style" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
   <link rel="preload" as="style" href="https://static.iotgarden.online/minhuytravel/css/site.css" />
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />

   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
   <link rel="stylesheet" href="https://static.iotgarden.online/minhuytravel/css/site.css" />
   <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,700&display=swap" rel="stylesheet" />
   <script type="module" src="https://static.iotgarden.online/minhuytravel/js/site.js" defer></script>
   <title>{props.title} - Min Huy Travel</title>
   <body style="overflow: hidden">
    <div id="cssload"></div>
    <div id="holder">
     <div class="topbar">
      <div class="wrapper flex-space">
       <div class="contact-top">
        <a href="#">
         <i aria-hidden="true" class="bi bi-telephone-fill"></i>+84 919 224 221
        </a>
        <a href="#">
         <i aria-hidden="true" class="bi bi-envelope-fill"></i>minhuy.travel@gmail.com
        </a>
       </div>
       <div class="col">
        <span class="social-top">
         <a href="#" title="Facebook"><i aria-hidden="true" class="bi bi-facebook"></i></a>
        </span>
        <button type="button" class="btn btn-top">BOOK NOW</button>
       </div>
      </div>
     </div>
     <div class="navbar">
      <div class="wrapper flex">
       <a href="/" title="Min Huy Travel" reltitle="Home" rel="page" scr="home">
        <div class="logo">
         <div class="img">
          <img src="https://static.iotgarden.online/minhuytravel/img/logo-wide.webp" alt="" />
         </div>
        </div>
       </a>
       <div class="nav" id="nav">
        <a href="/" class="navitem" reltitle="Home" rel="page" scr="home">
         Home
        </a>
        <a href="/tours" class="navitem" reltitle="Tours" rel="page" scr="tours">
         Tours
        </a>
        <a href="/destinations" class="navitem" reltitle="Destination" rel="page" scr="destination">
         Destination
        </a>
        <a href="/news" class="navitem" reltitle="News" rel="page" scr="news">
         News
        </a>
        <a href="/about" class="navitem" reltitle="About" rel="page" scr="about">
         About
        </a>
        <a href="/contact" class="navitem" reltitle="Contact" rel="page" scr="contact">
         Contact
        </a>
       </div>
       <div class="utils">

       </div>
      </div>
     </div>
     <main id="load">
      {props.children}
     </main>
     <footer>
      <div class="wrapper">
       <div class="footer">
        <div class="col">
         <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" loading="lazy" />
         <p>Welcome to our Trip and Tour Agency.</p>
         <div class="widget">
          <a href="#">
           <i aria-hidden="true" class="bi bi-telephone-fill"></i>
           <span>+84 919 224 221</span>
          </a>
          <a href="#">
           <i aria-hidden="true" class="bi bi-envelope-fill"></i>
           <span>minhuy.travel@gmail.com</span>
          </a>
          <a href="#">
           <i aria-hidden="true" class="bi bi-geo-alt-fill"></i>
           <span>9-58 An Thượng 29, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng, Việt Nam</span>
          </a>
         </div>
        </div>
        <div class="col">
         <h2>Company</h2>
         <a href="#">About Us</a>
         <a href="#">Community Blog</a>
         <a href="#">Rewards</a>
         <a href="#">Work with Us</a>
         <a href="#">Contact</a>
        </div>
        <div class="col">
         <h2>Explore</h2>
         <a href="#">Account</a>
         <a href="#">Privacy Policy</a>
         <a href="#">Affilitate Program</a>
         <a href="#">Our Partner</a>
         <a href="#">Events</a>
        </div>
       </div>
       <div class="bottombar">
        <div class="bar">
         <button class="btn" title="Scroll to top" onclick="location.href = `#`"><i aria-hidden="true" class="bi bi-arrow-up"></i></button>
         <div class="bottom">
          <div class="social-bottom">
           <div class="inner">
            <a href="#" title="Facebook">&nbsp;<i aria-hidden="true" class="bi bi-facebook"></i>&nbsp;</a>
            <a href="#" title="Line">&nbsp;<i aria-hidden="true" class="bi bi-line"></i>&nbsp;</a>
           </div>
          </div>
          <div class="right">&copy; Copyright 2023 by Min Huy Travel</div>
         </div>
        </div>
       </div>
      </div>
      <div id="loading" class="loading md-hide load">
       <div class="loader"></div>
      </div>
     </footer>
    </div>
   </body>
  </html>
 )
}

//Home
const Home: FC = (props) => {
 return (
  <>
   <div class="banner">
   </div>
   <div class="wrapper">
    <form action="#" method="get">
     <div class="search-home scroll">
      <input type="text" name="q" placeholder="Where are you going?" />
      <button type="button" class="btn"><i aria-hidden="true" class="bi bi-search"></i>SEARCH</button>
     </div>
    </form>
    <div class="sub-subtitle">
     LET'S SEE
    </div>
    <div class="sub-title">
     WHERE SHOULD YOU GO?
    </div>
    <div class="category">
     <div class="row">
      <div class="col fade-left scroll">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title">Da Nang</div>
      </div>
      <div class="col fade-up scroll">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title"><span>Cloudy City</span>Da Nang</div>
      </div>
      <div class="col fade-right scroll">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title">Da Nang</div>
      </div>
     </div>
     <div class="row row-2">
      <div class="col fade-up delay1 scroll">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title"><span>Wildlife</span>Da Nang</div>
      </div>
      <div class="col fade-up delay2 scroll">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title"><span>Adventure</span>Da Nang</div>
      </div>
     </div>
    </div>
   </div>
   <div class="deals">
    <div class="wrapper scroll">
     <div class="col bounce">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/deals.jpg" alt="" />
       <div class="discount">
        <div class="percent">30%</div>
        <h4>Discount</h4>
       </div>
       <div class="box"></div>
      </div>
     </div>
     <div class="col fade-up">
      <div class="section-subtitle left">Get to know us</div>
      <div class="section-title left">Plan Your Trip with Trevily</div>
      <div class="title-desc">
       There are many variations of passages of available but the majority have suffered alteration in some form,
       by injected hum randomised words which don't look even slightly.
      </div>
      <div class="list-items">
       <div class="list-item">
        Invest in your simply neighborhood
       </div>
       <div class="list-item">
        Support people in free text extreme
       </div>
       <div class="list-item">
        Largest global industrial business
       </div>
      </div>
      <button type="button" class="btn">BOOK WITH US NOW</button>
     </div>
    </div>
   </div>
   <div class="wrapper">
    <div class="section-subtitle">Featured tours</div>
    <div class="section-title">Most Popular Tours</div>
    <div class="card-holder scroll" id="popular-tours">
     <div class="card">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="heart" onclick="addWishlist(this,1)"></div>
      </div>
      <div class="inner">
       <div class="ratings">
        <i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i>
        <span>4.4</span>
        <p>4.4 BY 3 REVIEWS</p>
        <div class="right">
         <span>1</span>
        </div>
       </div>
       <div class="title">
        Tour example
       </div>
       <div class="tag"><i aria-hidden="true" class="bi bi-geo-alt-fill"></i>Bryce Canyon National Park, USA</div>
       <div class="price">From <span>$1,000</span></div>
       <div class="meta">
        <div class="icon">
         <i aria-hidden="true" class="bi bi-clock"></i>10 days
        </div>
        <div class="icon">
         <i aria-hidden="true" class="bi bi-people"></i>4
        </div>
       </div>
      </div>
     </div>
     <div class="card">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="heart" onclick="addWishlist(this,1)"></div>
      </div>
      <div class="inner">
       <div class="ratings">
        <i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i>
        <span>4.4</span>
        <p>4.4 BY 3 REVIEWS</p>
        <div class="right">
         <span>1</span>
        </div>
       </div>
       <div class="title">
        Tour example
       </div>
       <div class="tag"><i aria-hidden="true" class="bi bi-geo-alt-fill"></i>Bryce Canyon National Park, USA</div>
       <div class="price">From <span>$1,000</span></div>
       <div class="meta">
        <div class="icon">
         <i aria-hidden="true" class="bi bi-clock"></i>10 days
        </div>
        <div class="icon">
         <i aria-hidden="true" class="bi bi-people"></i>4
        </div>
       </div>
      </div>
     </div>
     <div class="card">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="heart" onclick="addWishlist(this,1)"></div>
      </div>
      <div class="inner">
       <div class="ratings">
        <i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i>
        <span>4.4</span>
        <p>4.4 BY 3 REVIEWS</p>
        <div class="right">
         <span>1</span>
        </div>
       </div>
       <div class="title">
        Tour example
       </div>
       <div class="tag"><i aria-hidden="true" class="bi bi-geo-alt-fill"></i>Bryce Canyon National Park, USA</div>
       <div class="price">From <span>$1,000</span></div>
       <div class="meta">
        <div class="icon">
         <i aria-hidden="true" class="bi bi-clock"></i>10 days
        </div>
        <div class="icon">
         <i aria-hidden="true" class="bi bi-people"></i>4
        </div>
       </div>
      </div>
     </div>
     <div class="card">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="heart" onclick="addWishlist(this,1)"></div>
      </div>
      <div class="inner">
       <div class="ratings">
        <i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i>
        <span>4.4</span>
        <p>4.4 BY 3 REVIEWS</p>
        <div class="right">
         <span>1</span>
        </div>
       </div>
       <div class="title">
        Tour example
       </div>
       <div class="tag"><i aria-hidden="true" class="bi bi-geo-alt-fill"></i>Bryce Canyon National Park, USA</div>
       <div class="price">From <span>$1,000</span></div>
       <div class="meta">
        <div class="icon">
         <i aria-hidden="true" class="bi bi-clock"></i>10 days
        </div>
        <div class="icon">
         <i aria-hidden="true" class="bi bi-people"></i>4
        </div>
       </div>
      </div>
     </div>
     <div class="card">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="heart" onclick="addWishlist(this,1)"></div>
      </div>
      <div class="inner">
       <div class="ratings">
        <i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i>
        <span>4.4</span>
        <p>4.4 BY 3 REVIEWS</p>
        <div class="right">
         <span>1</span>
        </div>
       </div>
       <div class="title">
        Tour example
       </div>
       <div class="tag"><i aria-hidden="true" class="bi bi-geo-alt-fill"></i>Bryce Canyon National Park, USA</div>
       <div class="price">From <span>$1,000</span></div>
       <div class="meta">
        <div class="icon">
         <i aria-hidden="true" class="bi bi-clock"></i>10 days
        </div>
        <div class="icon">
         <i aria-hidden="true" class="bi bi-people"></i>4
        </div>
       </div>
      </div>
     </div>
     <div class="card">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="heart" onclick="addWishlist(this,1)"></div>
      </div>
      <div class="inner">
       <div class="ratings">
        <i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i><i class="star-f"></i>
        <span>4.4</span>
        <p>4.4 BY 3 REVIEWS</p>
        <div class="right">
         <span>1</span>
        </div>
       </div>
       <div class="title">
        Tour example
       </div>
       <div class="tag"><i aria-hidden="true" class="bi bi-geo-alt-fill"></i>Bryce Canyon National Park, USA</div>
       <div class="price">From <span>$1,000</span></div>
       <div class="meta">
        <div class="icon">
         <i aria-hidden="true" class="bi bi-clock"></i>10 days
        </div>
        <div class="icon">
         <i aria-hidden="true" class="bi bi-people"></i>4
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="populated">
    <div class="wrapper">
     <div class="col">
      <div class="section-subtitle left">
       Are you ready to travel?
      </div>
      <div class="section-title left">
       Let's book with Min Huy Travel now
      </div>
     </div>
     <div class="col">
      <div class="icon-boxes scroll">
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/deer.svg" alt="" loading="lazy" />
        <div class="title">Wildlife<br />Tours</div>
       </div>
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/paragliding.svg" alt="" loading="lazy" />
        <div class="title">Paragliding<br />Tours</div>
       </div>
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/achievement.svg" alt="" loading="lazy" />
        <div class="title">Adventure<br />Tours</div>
       </div>
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/hang-gliding.svg" alt="" loading="lazy" />
        <div class="title">Hang Gliding<br />Tours</div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="reviews home-reviews">
    <div class="wrapper">
     <div>
      <div class="scroll">
       <div class="section-subtitle">
        Testimonials & reviews
       </div>
       <div class="section-title">
        What They’re Saying
       </div>
      </div>
     </div>
     <div class="review scroll">
      <div class="review-card">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="inner">
        <div class="stars">
         <i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="quote">
         This is due to their best service, pricing and customer support. It’s throughly refresing to such a
         personal touch. Duis aute irure lupsum reprehenderit.
        </div>
        <div class="meta">
         <div class="name">David Anderson</div>
         <div class="job">CUSTOMER</div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="home-gallery">
    <div class="gallery" id="gallery">
     <a rel="gallery" href="https://static.iotgarden.online/minhuytravel/img/test.webp" target="_blank">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="overlay">
        <div class="inner">
         <div class="title">Discovery Islands</div>
         <div class="subtitle">Sightseeing</div>
        </div>
       </div>
      </div>
     </a>
     <a rel="gallery" href="https://static.iotgarden.online/minhuytravel/img/test.webp" target="_blank">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="overlay">
        <div class="inner">
         <div class="title">Discovery Islands</div>
         <div class="subtitle">Sightseeing</div>
        </div>
       </div>
      </div>
     </a>
     <a rel="gallery" href="https://static.iotgarden.online/minhuytravel/img/test.webp" target="_blank">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="overlay">
        <div class="inner">
         <div class="title">Discovery Islands</div>
         <div class="subtitle">Sightseeing</div>
        </div>
       </div>
      </div>
     </a>
     <a rel="gallery" href="https://static.iotgarden.online/minhuytravel/img/test.webp" target="_blank">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="overlay">
        <div class="inner">
         <div class="title">Discovery Islands</div>
         <div class="subtitle">Sightseeing</div>
        </div>
       </div>
      </div>
     </a>
     <a rel="gallery" href="https://static.iotgarden.online/minhuytravel/img/test.webp" target="_blank">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="overlay">
        <div class="inner">
         <div class="title">Discovery Islands</div>
         <div class="subtitle">Sightseeing</div>
        </div>
       </div>
      </div>
     </a>
     <a rel="gallery" href="https://static.iotgarden.online/minhuytravel/img/test.webp" target="_blank">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="overlay">
        <div class="inner">
         <div class="title">Discovery Islands</div>
         <div class="subtitle">Sightseeing</div>
        </div>
       </div>
      </div>
     </a>
     <a rel="gallery" href="https://static.iotgarden.online/minhuytravel/img/test.webp" target="_blank">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="overlay">
        <div class="inner">
         <div class="title">Discovery Islands</div>
         <div class="subtitle">Sightseeing</div>
        </div>
       </div>
      </div>
     </a>
    </div>
   </div>
   <div class="home-benefits">
    <div class="col-left">
    </div>
    <div class="col">
     <div class="section-subtitle left">
      Our benefit lists
     </div>
     <div class="section-title left">
      Why Choose Min Huy Travel
     </div>
     <div class="title-desc white">There are many variations of passages of Lorem Ipsum is simply free text
      available in the market for you, but the majority have suffered alteration in some form.</div>
     <div class="icon-box">
      <img src="https://static.iotgarden.online/minhuytravel/img/safe-flight.svg" alt="" />
      <div class="content">
       <div class="title">
        Professional and Certified
       </div>
       <div class="desc">
        Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.
       </div>
      </div>
     </div>
     <div class="icon-box">
      <img src="https://static.iotgarden.online/minhuytravel/img/travel-map.svg" alt="" />
      <div class="content">
       <div class="title">
        Professional and Certified
       </div>
       <div class="desc">
        Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="wrapper">
    <div class="section">
     <div class="head">
      <div class="section-subtitle left">From the blog post</div>
      <div class="section-title left">News & Articles</div>
     </div>
     <div class="right">
      <button class="btn right">VIEW ALL POSTS</button>
     </div>
    </div>
    <div class="home-blog">
     <div class="card-holder scroll">
      <div class="card">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
        <div class="date">
         <span class="day">08</span>
         <span class="month">DEC</span>
        </div>
       </div>
       <div class="inner">
        <div class="head-tags">
         <div class="htag">
          <i aria-hidden="true" class="bi bi-person"></i>ADMIN
         </div>
         <div class="htag">
          <i aria-hidden="true" class="bi bi-bookmark"></i>TIPS & TRICKS
         </div>
        </div>
        <a href="#">
         <div class="title">
          Tour example
         </div>
        </a>
        <div class="desc">
         There are many variations of but the majority have simply free text available not suffered.
        </div>
        <div class="more">
         <a href="#">READ MORE<i aria-hidden="true" class="bi bi-arrow-right"></i></a>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

//Contact
const Contact: FC = (props) => {
 return (
  <>
   <div class="breadcrumb">
    <div class="wrapper">
     <div class="head">Contact</div>
     <div class="inner">
      <a href="/">Home</a><span class="seperator"></span><span>Contact</span>
     </div>
    </div>
   </div>
   <div class="wrapper page-contact">
    <div class="contact-page">
     <div class="col">
      <div class="contact-form">
       <div class="section-subtitle left">
        Talk with our team
       </div>
       <div class="section-title left">
        Contact Us
       </div>
       <form method="post" action="/mailer">
        <div class="form">
         <div class="input w-full">
          <textarea name="message" rows={6} placeholder="Your message*"></textarea>
          <i aria-hidden="true" class="bi bi-pencil"></i>
         </div>
         <div class="input">
          <input type="text" name="fname" placeholder="First name*" />
          <i aria-hidden="true" class="bi bi-person"></i>
         </div>
         <div class="input">
          <input type="text" name="lname" placeholder="Last name*" />
          <i aria-hidden="true" class="bi bi-person"></i>
         </div>
         <div class="input">
          <input type="text" name="email" placeholder="Email address*" autocomplete="on" />
          <i aria-hidden="true" class="bi bi-envelope"></i>
         </div>
         <div class="input">
          <input type="text" name="phone" placeholder="Phone number" autocomplete="on" />
          <i aria-hidden="true" class="bi bi-telephone"></i>
         </div>
        </div>
        <button type="submit" class="btn">SEND A MESSAGE
         <i aria-hidden="true" class="fa fa-arrow-right"></i>
        </button>
       </form>
      </div>
      <div class="contact-social">
       <a href="#"><i aria-hidden="true" class="bi bi-facebook"></i></a>
       <a href="#"><i aria-hidden="true" class="bi bi-line"></i></a>
      </div>
     </div>
     <div class="col">
      <div class="section-title left">
       Any Question?
      </div>
      <div class="title-desc">
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.
      </div>
      <div class="contact-info">
       <div class="inner">
        <div class="icon">
         <i aria-hidden="true" class="bi bi-geo-alt"></i>
        </div>
        <div class="text">
         <div class="head">
          Address
         </div>
         <div class="content">
          088 Broklyn Street NY, USA
         </div>
        </div>
       </div>
      </div>
      <div class="contact-info">
       <div class="inner">
        <div class="icon">
         <i aria-hidden="true" class="bi bi-telephone"></i>
        </div>
        <div class="text">
         <div class="head">
          Phone
         </div>
         <div class="content">
          +84 919 224 221
         </div>
        </div>
       </div>
      </div>
      <div class="contact-info">
       <div class="inner">
        <div class="icon">
         <i aria-hidden="true" class="bi bi-geo-alt"></i>
        </div>
        <div class="text">
         <div class="head">
          Email
         </div>
         <div class="content">
          minhuy.travel@gmail.com
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15342.933584393664!2d108.252355!3d15.9752931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295cb3d313469c9!2sVietnam%20-%20Korea%20University%20of%20Information%20and%20Communication%20Technology.!5e0!3m2!1sen!2s!4v1702132325353!5m2!1sen!2s" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
  </>
 )
}

//Destination
const Destination: FC = (props) => {
 return (
  <>
   <div class="bg-slider">
    <div slider="bg" class="img active">
     <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
    </div>
    <div slider="bg" class="img">
     <img src="https://static.iotgarden.online/minhuytravel/img/test2.webp" alt="" loading="lazy" />
    </div>
    <div class="wrapper">
     <h2>Destination</h2>
    </div>
   </div>
   <div class="wrapper page-destinations">
    <div class="section-subtitle">Destination lists</div>
    <div class="section-title">Explore Destinations</div>
    <div class="destinations">
     <div class="destination">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <span>1 Tours</span>
      </div>
      <div class="inner">
       <h3>Singapore</h3>
      </div>
     </div>
     <div class="destination">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <span>1 Tours</span>
      </div>
      <div class="inner">
       <h3>Thailand</h3>
      </div>
     </div>
     <div class="destination">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <span>1 Tours</span>
      </div>
      <div class="inner">
       <h3>United Kingdom</h3>
      </div>
     </div>
     <div class="destination">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <span>1 Tours</span>
      </div>
      <div class="inner">
       <h3>Hungary</h3>
      </div>
     </div>
     <div class="destination">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <span>1 Tours</span>
      </div>
      <div class="inner">
       <h3>France</h3>
      </div>
     </div>
     <div class="destination">
      <a href="#"></a>
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <span>1 Tours</span>
      </div>
      <div class="inner">
       <h3>Japan</h3>
      </div>
     </div>
    </div>
   </div>
   <div class="populated">
    <div class="wrapper">
     <div class="col">
      <div class="section-subtitle left">
       Are you ready to travel?
      </div>
      <div class="section-title left">
       Let's book with Min Huy Travel now
      </div>
     </div>
     <div class="col">
      <div class="icon-boxes h">
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/deer.svg" alt="" loading="lazy" />
        <div class="title">Wildlife<br />Tours</div>
       </div>
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/paragliding.svg" alt="" loading="lazy" />
        <div class="title">Paragliding<br />Tours</div>
       </div>
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/achievement.svg" alt="" loading="lazy" />
        <div class="title">Adventure<br />Tours</div>
       </div>
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/hang-gliding.svg" alt="" loading="lazy" />
        <div class="title">Hang Gliding<br />Tours</div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="join-us">
    <div class="wrapper">
     <div class="col">
      <div class="section-subtitle left">
       Join to us
      </div>
      <div class="section-title left">
       Not a Member Yet?
      </div>
      <p>Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.</p>
     </div>
     <div class="col">
      <img src="https://static.iotgarden.online/minhuytravel/img/image-app.png" alt="" loading="lazy" />
     </div>
    </div>
   </div>
  </>
 )
}

//Destination Details
const DestinationDetails: FC = (props) => {
 return (
  <>
   <div class="des-details">
    <div class="wrapper">
     <div class="col">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
      </div>
     </div>
     <div class="col">
      <h1 class="underline">United Kingdom</h1>
      <p>Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor consequat.</p>
      <div class="des-info">
       <div>Country</div><p>United Kingdom</p>
      </div>
      <div class="des-info">
       <div>Language Spoken</div><p>English</p>
      </div>
      <div class="des-info">
       <div>Visa Requirements</div><p>Personal Documents Required</p>
      </div>
      <div class="des-info">
       <div>Area (km2)</div><p>88.000 km2</p>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}


//News
const News: FC = (props) => {
 return (
  <>
   <div class="breadcrumb">
    <div class="wrapper">
     <div class="head">News</div>
     <div class="inner">
      <a href="/">Home</a><span class="seperator"></span><span>News</span>
     </div>
    </div>
   </div>
   <div class="wrapper page-news">
    <div class="card-holder show">
     <div class="card">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       <div class="date">
        <span class="day">08</span>
        <span class="month">DEC</span>
       </div>
      </div>
      <div class="inner">
       <div class="head-tags">
        <div class="htag">
         <i aria-hidden="true" class="bi bi-person"></i>ADMIN
        </div>
        <div class="htag">
         <i aria-hidden="true" class="bi bi-bookmark"></i>TIPS & TRICKS
        </div>
       </div>
       <a href="#">
        <div class="title">
         Tour example
        </div>
       </a>
       <div class="desc">
        There are many variations of but the majority have simply free text available not suffered.
       </div>
       <div class="more">
        <a href="#">READ MORE<i aria-hidden="true" class="bi bi-arrow-right"></i></a>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

//Tours
const Tours: FC = (props) => {
 return (
  <>
   <div class="bg-slider">
    <div slider="bg" class="img active">
     <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
    </div>
    <div slider="bg" class="img">
     <img src="https://static.iotgarden.online/minhuytravel/img/test2.webp" alt="" loading="lazy" />
    </div>
    <div class="wrapper">
     <div class="bg-text">
      <h3>Explore The World</h3>
      <div class="desc">People Don’t Take, Trips Take People</div>
     </div>
    </div>
   </div>
   <div class="wrapper page-destinations">
    <div class="section-subtitle">Destination lists</div>
    <div class="section-title">Explore Destinations</div>
    <div class="category">
     <div class="row">
      <div class="col">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title">Da Nang</div>
      </div>
      <div class="col">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title"><span>Cloudy City</span>Da Nang</div>
      </div>
      <div class="col">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title">Da Nang</div>
      </div>
     </div>
     <div class="row row-2">
      <div class="col">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title"><span>Wildlife</span>Da Nang</div>
      </div>
      <div class="col">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title"><span>Adventure</span>Da Nang</div>
      </div>
     </div>
     <div class="row row-3">
      <div class="col">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title"><span>Wildlife</span>Da Nang</div>
      </div>
      <div class="col">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title"><span>Wildlife</span>Da Nang</div>
      </div>
      <div class="col">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title"><span>Wildlife</span>Da Nang</div>
      </div>
      <div class="col">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
       <div class="col-title"><span>Adventure</span>Da Nang</div>
      </div>
     </div>
    </div>
   </div>
   <div class="populated">
    <div class="wrapper">
     <div class="col">
      <div class="section-subtitle left">
       Are you ready to travel?
      </div>
      <div class="section-title left">
       Let's book with Min Huy Travel now
      </div>
     </div>
     <div class="col">
      <div class="icon-boxes h">
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/deer.svg" alt="" loading="lazy" />
        <div class="title">Wildlife<br />Tours</div>
       </div>
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/paragliding.svg" alt="" loading="lazy" />
        <div class="title">Paragliding<br />Tours</div>
       </div>
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/achievement.svg" alt="" loading="lazy" />
        <div class="title">Adventure<br />Tours</div>
       </div>
       <div class="icon-box">
        <img src="https://static.iotgarden.online/minhuytravel/img/hang-gliding.svg" alt="" loading="lazy" />
        <div class="title">Hang Gliding<br />Tours</div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="join-us">
    <div class="wrapper">
     <div class="col">
      <div class="section-subtitle left">
       Join to us
      </div>
      <div class="section-title left">
       Not a Member Yet?
      </div>
      <p>Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.</p>
     </div>
     <div class="col">
      <img src="https://static.iotgarden.online/minhuytravel/img/image-app.png" alt="" loading="lazy" />
     </div>
    </div>
   </div>
  </>
 )
}

//Tour Details
const TourDetails: FC = (props) => {
 return (
  <>
   <div class="breadcrumb">
    <div class="wrapper">
     <div class="inner bg">
      <a href="/">Home</a><span class="seperator"></span><span attr="tourname">--</span>
     </div>
    </div>
   </div>
   <div class="tour-head">
    <div class="wrapper">
     <div class="tour-name">
      <h3 attr="tourname">--</h3>
      <p><i aria-hidden="true" class="bi bi-geo-alt"></i><span attr="tourlocation">--</span></p>
     </div>
     <div class="tour-briefs">
      <div class="brief">
       <i aria-hidden="true" class="bi bi-airplane-engines"></i>
       <div class="inner">
        <p>Tour Type</p>
        <span attr="tourtype">--</span>
       </div>
      </div>
      <div class="brief">
       <i aria-hidden="true" class="bi bi-clock-history"></i>
       <div class="inner">
        <p>Duration</p>
        <span attr="tourduration">--</span>
       </div>
      </div>
      <div class="brief">
       <i aria-hidden="true" class="bi bi-cash-coin"></i>
       <div class="inner">
        <p>From</p>
        <span attr="tourprice">--</span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="tour-actions">
    <div class="wrapper">
     <div class="action" onclick="addWishlist(this,1)">
      <i aria-hidden="true" class="fa fa-heart"></i>WISHLIST
     </div>
     <a class="action" href="#review">
      <i aria-hidden="true" class="fa fa-share"></i>REVIEWS
     </a>
     <div class="action" id="share">
      <i aria-hidden="true" class="fa fa-share"></i>SHARE
      <div class="share-tour">eeee</div>
     </div>
    </div>
   </div>
   <div class="details tour-details">
    <div class="wrapper">
     <div class="col">
      <div class="img-thumb">
       <div class="pic-view">
        <i class="bi bi-camera"></i>
       </div>
       <div id="img-slider">
        <div class="img">
         <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
        </div>
       </div>
      </div>
      <h2>Overview</h2>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
      <div class="divider"></div>
      <h2>Tour Plan</h2>
      <div class="accordion">
       <div class="head">Attraction 1</div>
       <i aria-hidden="true" class="bi bi-chevron-down"></i>
       <div class="pane">
        <p>e</p>
       </div>
      </div>
      <div class="accordion">
       <div class="head">Attraction 2</div>
       <i aria-hidden="true" class="bi bi-chevron-down"></i>
       <div class="pane">
        <p>e</p>
       </div>
      </div>
      <h2>Related Tours</h2>
      <h2>Review Scores <span id="review"></span></h2>
      <p>No reviews yet</p>
      <div class="margin"></div>
      <h3 class="underline">Add a Comment</h3>
      <p>Your email address will not be published.</p>
     </div>
     <div class="col">
      <div class="side-pane">
       <h2>Tour Information</h2>
       <div class="tour-briefs">
        <div class="brief">
         <i aria-hidden="true" class="bi bi-people"></i>
         <div class="inner">
          <p>Max Guests</p>
          <span attr="tourmem">--</span>
         </div>
        </div>
        <div class="brief">
         <i aria-hidden="true" class="bi bi-person-vcard"></i>
         <div class="inner">
          <p>Min Age</p>
          <span attr="tourage">--</span>
         </div>
        </div>
        <div class="brief">
         <i aria-hidden="true" class="bi bi-airplane-engines"></i>
         <div class="inner">
          <p>Tour Location</p>
          <span attr="tourlocation">--</span>
         </div>
        </div>
        <div class="brief">
         <i aria-hidden="true" class="bi bi-globe2"></i>
         <div class="inner">
          <p>Language Support</p>
          <span attr="tourlang">English</span>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

//News Details
const NewsDetails: FC = (props) => {
 return (
  <>
   <div class="breadcrumb">
    <div class="wrapper">
     <div class="inner bg">
      <a href="/">Home</a><span class="seperator"></span><span>News</span>
     </div>
    </div>
   </div>
   <div class="details new-details">
    <div class="wrapper">
     <div class="col">
      <div class="img-thumb">
       <div class="img">
        <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
       </div>
      </div>
      <div class="tags">
       <div class="tag">
        <i aria-hidden="true" class="bi bi-person"></i>Admin
       </div>
       <div class="tag">
        <i aria-hidden="true" class="bi bi-bookmarks"></i><a href="">Business</a>, <a href="">Lifestyle</a>
       </div>
      </div>
      <h1>Things to See and Do When Visiting Japan</h1>
      <div id="new-body">
       <p>The Spring is a passionate and determined group of monthly givers on a mission to end the water crisis in our lifetime. People like you, from more than 100 countries around the world, giving anything they can to prove how unstoppable we are when we work together.</p>
       <p>The Spring is a passionate and determined group of monthly givers on a mission to end the water crisis in our lifetime. People like you, from more than 100 countries around the world, giving anything they can to prove how unstoppable we are when we work together.</p>
      </div>
      <div class="divider"></div>
      <h2>Tour Plan</h2>
      <div class="accordion">
       <div class="head">Attraction 1</div>
       <i aria-hidden="true" class="bi bi-chevron-down"></i>
       <div class="pane">
        <p>e</p>
       </div>
      </div>
      <div class="accordion">
       <div class="head">Attraction 2</div>
       <i aria-hidden="true" class="bi bi-chevron-down"></i>
       <div class="pane">
        <p>e</p>
       </div>
      </div>
      <h2>Related Tours</h2>
      <h2>Review Scores</h2>
      <p>No reviews yet</p>
      <div class="margin"></div>
      <h3>Add a Comment</h3>
      <p>Your email address will not be published.</p>
     </div>
     <div class="col">
      <div class="side-pane">
       <h2>Recent Posts</h2>
       <ul class="new-lists">
        <li class="new-list">
         <a href="#"></a>
         <div class="img">
          <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" loading="lazy" />
         </div>
         <div class="inner">
          <div class="tag">
           <i aria-hidden="true" class="bi bi-bookmarks"></i>Business, Lifestyle
          </div>
          <h4>Things to See and Do When Visiting Japan</h4>
         </div>
        </li>
        <li class="new-list">
         <a href="#"></a>
         <div class="img">
          <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" loading="lazy" />
         </div>
         <div class="inner">
          <div class="tag">
           <i aria-hidden="true" class="bi bi-bookmarks"></i>Business, Lifestyle
          </div>
          <h4>Things to See and Do When Visiting Japan</h4>
         </div>
        </li>
        <li class="new-list">
         <a href="#"></a>
         <div class="img">
          <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" loading="lazy" />
         </div>
         <div class="inner">
          <div class="tag">
           <i aria-hidden="true" class="bi bi-bookmarks"></i>Business, Lifestyle
          </div>
          <h4>Things to See and Do When Visiting Japan</h4>
         </div>
        </li>
       </ul>
      </div>
      <div class="side-pane">
       <h2>All Categories</h2>
       <ul class="cal-items">
        <li class="cal-item">

        </li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

//About
const About: FC = (props) => {
 return (
  <>
   <div class="breadcrumb">
    <div class="wrapper">
     <div class="head">About</div>
     <div class="inner">
      <a href="/">Home</a><span class="seperator"></span><span>About</span>
     </div>
    </div>
   </div>
   <div class="about">
    <div class="wrapper">
     <div class="col">
      <div class="img">
       <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" loading="lazy" />
      </div>
     </div>
     <div class="col">
      <div class="section-subtitle left">Learn about us</div>
      <div class="section-title left">Dare to Explore with Tevily Agency</div>
      <div class="title-desc">
       We are trusted by our clients and have a reputation for the best services in the field. Lorem ipsum is simply free text dolor sit amett consectetur adipiscing elit. It is a long established fact that a reader will be distracted by the readable content of a page.
      </div>
      <div class="prgs">
       <div class="title">Best Services</div>
       <span>80%</span>
       <div class="prgs-bar">
        <div class="prgs-bar-fill" style="width: 80%"></div>
       </div>
      </div>
      <div class="prgs">
       <div class="title">Tour Agents</div>
       <span>80%</span>
       <div class="prgs-bar">
        <div class="prgs-bar-fill" style="width: 80%"></div>
       </div>
      </div>
     </div>
    </div>
    <div class="bg-book">
     <div class="wrapper">
      <button class="btn">BOOK TOUR NOW</button>
      <span>Play your trip with us</span>
      <h2>Ready for an unforgetable tour?</h2>
     </div>
    </div>
    <div class="reviews about-reviews">
     <div class="section-subtitle">
      Testimonials & reviews
     </div>
     <div class="section-title">
      What They’re Saying
     </div>
     <div class="reviews">
      <div class="wrapper">
       <div class="review">
        <div class="review-card">
         <div class="img">
          <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" />
         </div>
         <div class="inner">
          <div class="stars">
           <i></i><i></i><i></i><i></i><i></i>
          </div>
          <div class="quote">
           This is due to their best service, pricing and customer support. It’s throughly refresing to such a
           personal touch. Duis aute irure lupsum reprehenderit.
          </div>
          <div class="meta">
           <div class="name">David Anderson</div>
           <div class="job">CUSTOMER</div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

//Not Found
const NotFound: FC = (props) => {
 return (
  <>
   <div class="not-found">
    <div class="img">
     <img src="https://static.iotgarden.online/minhuytravel/img/test.webp" alt="" loading="lazy" />
    </div>
    <h1>404</h1>
    <h2>PAGE NOT FOUND</h2>
    <p>The page requested could not be found. This could be a spelling error in the URL or a removed page.</p>
    <button class="btn"><i class="bi bi-arrow-left-circle"></i>BACK HOMEPAGE</button>
   </div>
  </>
 )
}

//Routes
const preloadHeader = '<https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css>; rel=preload; as=style, <https://static.iotgarden.online/minhuytravel/css/site.css>; rel=preload; as=style, <https://static.iotgarden.online/minhuytravel/js/site.js>; rel=preload; as=script; crossorigin=anonymous, <https://fonts.googleapis.com>; rel="preconnect", <https://fonts.gstatic.com>; rel="preconnect; crossorigin'
app.get('/', (c) => {
 if (c.req.query("rel")) {
  return c.html(<Home />)
 };

 c.header('Link', preloadHeader);
 return c.html("<!DOCTYPE html>" +
  <Layout
   title="Home"
  >
   <Home />
  </Layout>
  + "</html>", 200
 );
});
app.get('/contact', (c) => {
 if (c.req.query("rel")) {
  return c.html(<Contact />)
 };

 c.header('Link', preloadHeader);
 return c.html("<!DOCTYPE html>" +
  <Layout
   title="Contact"
  >
   <Contact />
  </Layout>
  + "</html>", 200
 );
});
app.get('/destinations', (c) => {
 if (c.req.query("rel")) {
  return c.html(<Destination />);
 };

 c.header('Link', preloadHeader);
 return c.html("<!DOCTYPE html>" +
  <Layout
   title="Destination"
  >
   <Destination />
  </Layout>
  + "</html>", 200
 );
});
app.get('/destination/:slug', (c) => {
 if (c.req.query("rel")) {
  return c.html(<DestinationDetails />);
 };

 c.header('Link', preloadHeader);
 return c.html("<!DOCTYPE html>" +
  <Layout
   title="Destination"
  >
   <DestinationDetails />
  </Layout>
  + "</html>", 200
 );
});
app.get('/news', (c) => {
 if (c.req.query("rel")) {
  return c.html(<News />);
 };

 c.header('Link', preloadHeader);
 return c.html("<!DOCTYPE html>" +
  <Layout
   title="News"
  >
   <News />
  </Layout>
  + "</html>", 200
 );
});
app.get('/new/:slug', (c) => {
 if (c.req.query("rel")) {
  return c.html(<NewsDetails />);
 };

 c.header('Link', preloadHeader);
 return c.html("<!DOCTYPE html>" +
  <Layout
   title="New"
  >
   <NewsDetails />
  </Layout>
  + "</html>", 200
 );
});
app.get('/about', (c) => {
 if (c.req.query("rel")) {
  return c.html(<About />);
 };

 c.header('Link', preloadHeader);
 return c.html("<!DOCTYPE html>" +
  <Layout
   title="About"
  >
   <About />
  </Layout>
  + "</html>", 200
 );
});
app.get('/tours', (c) => {
 if (c.req.query("rel")) {
  return c.html(<Tours />);
 };

 c.header('Link', preloadHeader);
 return c.html("<!DOCTYPE html>" +
  <Layout
   title="Tours"
  >
   <Tours />
  </Layout>
  + "</html>", 200
 );
});
app.get('/tour/:slug', (c) => {
 if (c.req.query("rel")) {
  return c.html(<TourDetails />);
 };

 c.header('Link', preloadHeader);
 return c.html("<!DOCTYPE html>" +
  <Layout
   title="Tour"
  >
   <TourDetails />
  </Layout>
  + "</html>", 200
 );
});
app.post('/mailer', async (c) => {
 const send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
  "method": "POST",
  "headers": {
   "content-type": "application/json",
  },
  "body": JSON.stringify({
   "personalizations": [
    {
     "to": [{
      "email": "hoang2092003@yahoo.com", "name": "Nguyễn Huy Hoàng"
     }]
    }
   ],
   "from": {
    "email": "support@iotgarden.online",
    "name": "IoT Garden",
   },
   "subject": "Test Subject",
   "content": [{
    "type": "text/plain",
    "value": "Test message content",
   }],
  }),
 });
 await fetch(send_request);
 return c.text("Ok");
});

//404
app.notFound((c) => {
 c.header('Link', preloadHeader);
 if (c.req.query("rel")) {
  return c.html(<NotFound />);
 };
 return c.html(
  <Layout
   title="Page Not Found"
  >
   <NotFound />
  </Layout>
 );
});

export default app;
