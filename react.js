var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>BookMafia</title>
          <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
          {/* cdn link  */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
          <link rel="stylesheet" href="styles.css" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png" />
          <link rel="manifest" href="favicon_io/site.webmanifest" />
          {/* header section starts  */}
          <header className="header">
            <div className="header-1">
              <a href="#" className="logo"> <i className="fas fa-book" /> BookMafia </a>
              <form action className="search-form">
                <input type="search" name placeholder="search here..." id="search-box" />
                <label htmlFor="search-box" className="fas fa-search" />
              </form>
              <div className="user-options">
                <a href="#" className="like-button" onclick="likeButtonClick(this)">
                  <i className="far fa-heart" />
                </a>
              </div>
              <div className="icons">
                <div id="search-btn" className="fas fa-search" />
                <a href="./cart.html" className="fas fa-shopping-cart" />
                <div id="login-btn" className="fas fa-user" />
              </div>
            </div>
            <div className="header-2">
              <nav className="navbar">
                <a href="#home">home</a>
                <a href="#Mood">Mood</a>
                <a href="#arrivals">category</a>
                <a href="#reviews">reviews</a>
                <a href="#feedback">feedback</a>
              </nav>
            </div>
          </header>
          {/* header section ends */}
          {/* bottom navbar  */}
          <nav className="bottom-navbar">
            <a href="#home" className="fas fa-home" />
            <a href="#Mood" className="fas fa-list" />
            <a href="#arrivals" className="fas fa-tags" />
            <a href="#reviews" className="fas fa-comments" />
            <a href="#feedback" className="fas fa-feedback" />
          </nav>
          {/* login form  */}
          <div className="login-form-container">
            <div id="close-login-btn" className="fas fa-times" />
            <form action>
              <h3>sign in</h3>
              <span>username</span>
              <input type="email" name className="box" placeholder="enter your email" id />
              <span>password</span>
              <input type="password" name className="box" placeholder="enter your password" id />
              <div className="checkbox">
                <input type="checkbox" name id="remember-me" />
                <label htmlFor="remember-me"> remember me</label>
              </div>
              <input type="submit" defaultValue="sign in" className="btn" />
              <p>forget password ? <a href="#">click here</a></p>
              <p>don't have an account ? <a href="#">create one</a></p>
            </form>
          </div>
          {/* home section starts  */}
          <section className="home" id="home">
            <div className="row">
              <div className="content">
                <h3>upto 75% off</h3>
                <p>If you’re an Engineering student and need a books, Books4MU has great deals on a wide range of books. Shop for these books from top authors and avail hugely discounted prices</p>
                {/* <a href="#" class="exampleBtn">shop now</a> */}
                <button className="exampleBtn">
                  <span><b>Shop Now</b></span>
                </button>
              </div>
              <div className="swiper books-slider">
                <div className="swiper-wrapper">
                  <a href="#" className="swiper-slide"><img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-1.png" alt="" /></a>
                  <a href="#" className="swiper-slide"><img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-2.png" alt="" /></a>
                  <a href="#" className="swiper-slide"><img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-3.png" alt="" /></a>
                  <a href="#" className="swiper-slide"><img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-4.png" alt="" /></a>
                  <a href="#" className="swiper-slide"><img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-5.png" alt="" /></a>
                  <a href="#" className="swiper-slide"><img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-6.png" alt="" /></a>
                </div>
                <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/stand.png" className="stand" alt="" />
              </div>
            </div>
          </section>
          {/* home section ense  */}
          {/* icons section starts  */}
          <section className="icons-container">
            <div className="icons">
              <i className="fas fa-shipping-fast" />
              <div className="content">
                <h3>free shipping</h3>
                <p>order over $100</p>
              </div>
            </div>
            <div className="icons">
              <i className="fas fa-lock" />
              <div className="content">
                <h3>secure payment</h3>
                <p>100 secure payment</p>
              </div>
            </div>
            <div className="icons">
              <i className="fas fa-redo-alt" />
              <div className="content">
                <h3>easy returns</h3>
                <p>10 days returns</p>
              </div>
            </div>
            <div className="icons">
              <i className="fas fa-headset" />
              <div className="content">
                <h3>24/7 support</h3>
                <p>call us anytime</p>
              </div>
            </div>
          </section>
          {/* icons section ends */}
          {/* featured section starts  */}
          <section className="featured" id="featured">
            <h1 className="heading"> <span>featured books</span> </h1>
            <div className="swiper featured-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <a href="./product.html"> <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-1.png" alt="" /> </a>
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="./cart.html" className="btn">add to cart</a>
                  </div>
                </div>
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <a href="./product.html"> <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-2.png" alt="" /> </a>
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="./cart.html" className="btn">add to cart</a>
                  </div>
                </div>
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <a href="product.html"><img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-3.png" alt="" /> </a>
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="./cart.html" className="btn">add to cart</a>
                  </div>
                </div>
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-4.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="./cart.html" className="btn">add to cart</a>
                  </div>
                </div>
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-5.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="./cart.html" className="btn">add to cart</a>
                  </div>
                </div>
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-6.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="./cart.html" className="btn">add to cart</a>
                  </div>
                </div>
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-7.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="./cart.html" className="btn">add to cart</a>
                  </div>
                </div>
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-8.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="./cart.html" className="btn">add to cart</a>
                  </div>
                </div>
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-9.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="./cart.html" className="btn">add to cart</a>
                  </div>
                </div>
                <div className="swiper-slide box">
                  <div className="icons">
                    <a href="#" className="fas fa-search" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-10.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="./cart.html" className="btn">add to cart</a>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </section>
          {/* featured section ends */}
          {/* newsletter section starts */}
          <section className="newsletter">
            <form action>
              <h3>subscribe for latest updates</h3>
              <input type="email" name placeholder="enter your email" id className="box" />
              <input type="submit" defaultValue="subscribe" className="btn" />
            </form>
          </section>
          {/* newsletter section ends */}
          {/* Mood Recommendations section starts */}
          {/* <button id="moodButton">Select Your Mood</button>
  <link rel="stylesheet" href="mod.css">
          
          <div id="moodSelection" class="hidden">
              <h2>Select a Mood</h2>
              <button class="moodOption" data-mood="happy">Happy</button>
              <button class="moodOption" data-mood="sad">Sad</button>
              <button class="moodOption" data-mood="excited">Excited</button>
              <button class="moodOption" data-mood="relaxed">Relaxed</button>
          </div>
          
          <div id="recommendations" class="hidden">
              <h2>Book Recommendations</h2>
              <ul id="bookList"></ul>
          </div>
      </div>
  
       */}
          {/* Mood Recommendations section end */}
          {/* category section starts  */}
          <section className="arrivals" id="arrivals">
            <h1 className="heading"> <span>Category</span> </h1>
            <div className="swiper arrivals-slider">
              <div className="swiper-wrapper">
                <a href="#" className="swiper-slide box">
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-1.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>Semester 1</h3>
                  </div>
                </a>
                <a href="#" className="swiper-slide box">
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-4.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>Semester 2</h3>
                  </div>
                </a>
                <a href="#" className="swiper-slide box">
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-6.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>Semester 3</h3>
                  </div>
                </a>
                <a href="#" className="swiper-slide box">
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-7.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>Semester 4</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="swiper arrivals-slider">
              <div className="swiper-wrapper">
                <a href="#" className="swiper-slide box">
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-8.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>Semester 5</h3>
                  </div>
                </a>
                <a href="#" className="swiper-slide box">
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-9.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>Semester 6</h3>
                  </div>
                </a>
                <a href="#" className="swiper-slide box">
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book-10.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>Semester 7</h3>
                  </div>
                </a>
                <a href="#" className="swiper-slide box">
                  <div className="image">
                    <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/book3.png" alt="" />
                  </div>
                  <div className="content">
                    <h3>Semester 8</h3>
                  </div>
                </a>
              </div>
            </div>
          </section>
          {/* category section ends */}
          {/* deal section starts  */}
          <section className="deal">
            <div className="content">
              <h3>deal of the day</h3>
              <h1>upto 50% off</h1>
              <p>Checkout before this deal expires at midnight.</p>
              {/* <a href="#" class="btn">shop now</a> */}
              <button className="exampleBtn">
                <span><b>Shop Now</b></span>
              </button>
            </div>
            <div className="image">
              <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/deal-img.jpg" alt="" />
            </div>
          </section>
          {/* deal section ends */}
          {/* reviews section starts  */}
          <section className="reviews" id="reviews">
            <h1 className="heading"> <span>client's reviews</span> </h1>
            <div className="swiper reviews-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide box">
                  <img src="c:\Users\amans\Pictures\Screenshots\Screenshot 2024-06-18 084509.png" alt="" />
                  <h3>Abhilasha</h3>
                  <p>First of all it customer service is excellent. We get all author book for Mumbai University. People should try here affordable and best price.</p>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="swiper-slide box">
                  <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-2.png" alt="" />
                  <h3>Shruti</h3>
                  <p>Best book store almost all books are available for prepartion of exam related or other books are available on reaonable price also.</p>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="swiper-slide box">
                  <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-3.png" alt="" />
                  <h3>Shivangi</h3>
                  <p>Customer Service is good. Greetings to customer and making the required Books available to Customers is very good.</p>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="swiper-slide box">
                  <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-4.png" alt="" />
                  <h3>Arihant</h3>
                  <p>This book centre have large amount of a books. The engineering study material all semester books are available.then the peacefull and nice book centre.</p>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="swiper-slide box">
                  <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-5.png" alt="" />
                  <h3>Aman</h3>
                  <p>I migrated to the online platform on Just books because I was finding it difficult to go to their libraries before closing time.</p>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                {/* <div class="swiper-slide box">
                  <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-6.png" alt="">
                  <h3>Sidddhi </h3>
                  <p>I love the product because it is very easy to find. The book are in really organized manner you can easily find the book you want.</p>
                  <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                  </div>
              </div> */}
              </div>
            </div>
          </section>
          {/* reviews section ends */}
          {/* feedback section starts  */}
          <section className="feedback" id="feedback">
            <h1 className="heading"> <span>feedback</span> </h1>
            <section className="newsletter">
              <form action>
                <h3>give your feedback here...</h3>
                <a href="./feedback.html" className="btn">feedback</a>
                {/* <a href="./feedback.html"><input type="submit" value="feedback"> */}
              </form>
            </section>
          </section>
          {/* feedback section ends */}
          {/* footer section starts  */}
          <section className="footer">
            <div className="box-container">
              <div className="box">
                <h3>our locations</h3>
                <a href="#"> <i className="fas fa-map-marker-alt" /> India </a>
                {/* <a href="#"> <i class="fas fa-map-marker-alt"></i> USA </a> */}
              </div>
              <div className="box">
                <h3>quick links</h3>
                <a href="./index.html"> <i className="fas fa-arrow-right" /> home </a>
                <a href="#"> <i className="fas fa-arrow-right" /> Mood</a>
                <a href="#"> <i className="fas fa-arrow-right" /> Category </a>
                <a href="#"> <i className="fas fa-arrow-right" /> reviews </a>
                <a href="./feedback.html"> <i className="fas fa-arrow-right" /> feedback </a>
              </div>
              <div className="box">
                <h3>extra links</h3>
                <a href="#"> <i className="fas fa-arrow-right" /> account info </a>
                <a href="#"> <i className="fas fa-arrow-right" /> ordered items </a>
                <a href="#"> <i className="fas fa-arrow-right" /> privacy policy </a>
                <a href="#"> <i className="fas fa-arrow-right" /> payment method </a>
                <a href="#"> <i className="fas fa-arrow-right" /> our serivces </a>
              </div>
              <div className="box">
                <h3>contact info</h3>
                <a href="#"> <i className="fas fa-phone" /> 9667936435 </a>
                <a href="#"> <i className="fas fa-phone" /> 7384950382 </a>
                <a href="#"> <i className="fas fa-envelope" /> amansingh23445@gmail.com </a>
                <a href="#"> <i className="fas fa-envelope" /> abhilasha234@gmail.com </a>
                <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/worldmap.png" className="map" alt="" />
              </div>
            </div>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="https://twitter.com/@Amansingh139293" className="fab fa-twitter" />
              <a href="https://www.instagram.com/aman_25751/" className="fab fa-instagram" />
              <a href className="fab fa-linkedin" />
              <a href className="fab fa-linkedin" />
            </div>
            <div className="credit"> created by <span>Gang of gla and lpu.</span>copyright ©2024all rights reserved! </div>
          </section>
          {/* footer section ends */}
          {/* loader  */}
          <div className="loader-container">
            <img src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/loader-img.gif" alt="" />
          </div>
          {/* custom js file link  */}
        </div>
      );
    }
  });