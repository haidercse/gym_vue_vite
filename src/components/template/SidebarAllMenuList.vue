<template>
  <div class="js-sidebar-scroll">
    <!-- Side Navigation -->
    <div class="content-side">
      <ul class="nav-main">
        <li class="nav-main-item">
          <router-link class="nav-main-link" :to="{ name: 'staff-dashboard' }">
            <i class="nav-main-link-icon si si-speedometer"></i>
            <span class="nav-main-link-name">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-main-item">
          <router-link class="nav-main-link" :to="{ name: 'member'}">
            <i class="nav-main-link-icon si si-speedometer"></i>
            <span class="nav-main-link-name">Member</span>
          </router-link>
        </li>

        <li class="nav-main-item">
          <a class="nav-main-link" href="be_pages_dashboard.html">
            <i class="nav-main-link-icon si si-speedometer"></i>
            <span class="nav-main-link-name">Logout</span>
          </a>
        </li>
        <!-- <li class="nav-main-item">
          <div class="dropdown">
            <a
              class="nav-main-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="background:#272e38">
              <a class="dropdown-item " href="#">Another action</a>
              <a class="dropdown-item " href="#">Something else here</a>
            </div>
          </div>
        </li> -->
        <!-- <li class="nav-main-item">
          <a
            class="nav-main-link nav-main-link-submenu"
            data-toggle="submenu"
            aria-haspopup="true"
            aria-expanded="false"
            href="#"
          >
            <i class="nav-main-link-icon si si-layers"></i>
            <span class="nav-main-link-name">Page Packs</span>
          </a>
          <ul class="nav-main-submenu">
            <li class="nav-main-item">
              <a
                class="nav-main-link nav-main-link-submenu"
                data-toggle="submenu"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                <i class="nav-main-link-icon si si-bag"></i>
                <span class="nav-main-link-name">e-Commerce</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_ecom_dashboard.html">
                    <span class="nav-main-link-name">Dashboard</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_ecom_orders.html">
                    <span class="nav-main-link-name">Orders</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_ecom_order.html">
                    <span class="nav-main-link-name">Order</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_ecom_products.html">
                    <span class="nav-main-link-name">Products</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_ecom_product_edit.html"
                  >
                    <span class="nav-main-link-name">Product Edit</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_ecom_customer.html">
                    <span class="nav-main-link-name">Customer</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-main-item">
              <a
                class="nav-main-link nav-main-link-submenu"
                data-toggle="submenu"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                <i class="nav-main-link-icon si si-handbag"></i>
                <span class="nav-main-link-name">e-Commerce Store</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_ecom_store_home.html">
                    <span class="nav-main-link-name">Home</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_ecom_store_search.html"
                  >
                    <span class="nav-main-link-name">Search Results</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_ecom_store_products.html"
                  >
                    <span class="nav-main-link-name">Products List</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_ecom_store_product.html"
                  >
                    <span class="nav-main-link-name">Product Page</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_ecom_store_checkout.html"
                  >
                    <span class="nav-main-link-name">Checkout</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-main-item">
              <a
                class="nav-main-link nav-main-link-submenu"
                data-toggle="submenu"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                <i class="nav-main-link-icon si si-pencil"></i>
                <span class="nav-main-link-name">Blog</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_blog_classic.html">
                    <span class="nav-main-link-name">Classic</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_blog_list.html">
                    <span class="nav-main-link-name">List</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_blog_grid.html">
                    <span class="nav-main-link-name">Grid</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_blog_story.html">
                    <span class="nav-main-link-name">Story</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_blog_story_cover.html"
                  >
                    <span class="nav-main-link-name">Story Cover</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-main-item">
              <a
                class="nav-main-link nav-main-link-submenu"
                data-toggle="submenu"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                <i class="nav-main-link-icon si si-graduation"></i>
                <span class="nav-main-link-name">e-Learning</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_elearning_courses.html"
                  >
                    <span class="nav-main-link-name">Courses</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_elearning_course.html"
                  >
                    <span class="nav-main-link-name">Course</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_elearning_lesson.html"
                  >
                    <span class="nav-main-link-name">Lesson</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-main-item">
              <a
                class="nav-main-link nav-main-link-submenu"
                data-toggle="submenu"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                <i class="nav-main-link-icon si si-bubbles"></i>
                <span class="nav-main-link-name">Forum</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_forum_categories.html"
                  >
                    <span class="nav-main-link-name">Categories</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="be_pages_forum_topics.html">
                    <span class="nav-main-link-name">Topics</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a
                    class="nav-main-link"
                    href="be_pages_forum_discussion.html"
                  >
                    <span class="nav-main-link-name">Discussion</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-main-item">
              <a
                class="nav-main-link nav-main-link-submenu"
                data-toggle="submenu"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                <i class="nav-main-link-icon si si-magnet"></i>
                <span class="nav-main-link-name">Boxed Backend</span>
              </a>
              <ul class="nav-main-submenu">
                <li class="nav-main-item">
                  <a class="nav-main-link" href="bd_dashboard.html">
                    <span class="nav-main-link-name">Dashboard</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="bd_search.html">
                    <span class="nav-main-link-name">Search</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="bd_simple_1.html">
                    <span class="nav-main-link-name">Simple 1</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="bd_simple_2.html">
                    <span class="nav-main-link-name">Simple 2</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="bd_image_1.html">
                    <span class="nav-main-link-name">Image 1</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="bd_image_2.html">
                    <span class="nav-main-link-name">Image 2</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="bd_video_1.html">
                    <span class="nav-main-link-name">Video 1</span>
                  </a>
                </li>
                <li class="nav-main-item">
                  <a class="nav-main-link" href="bd_video_2.html">
                    <span class="nav-main-link-name">Video 2</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li> -->
      </ul>
    </div>
    <!-- END Side Navigation -->
  </div>
  <!-- END Sidebar Scrolling -->
</template>

<script>
export default {};
</script>

<style>
</style>