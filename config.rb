# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

config[:fonts_dir] = 'fonts'

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )


#ignore "/course.html"
#data.courses.each do |p|
#  proxy "/#{p.title.parameterize}.html", "/course.html", locals: { course: p }
#end





# enable livereload on development
configure :development do
  activate :livereload
end


activate :dato,
  token: '36b425f0bb13f6863917',
  base_url: 'https://timber-grader-randy-62421.netlify.com/',
  live_reload: true


  # due to how middleman 4 collections work (http://bit.ly/2jHZTI9),
  # always use `dato` inside a `.tap` method block, like this:
  dato.tap do |dato|

    dato.courses.each do |p|
      proxy "/#{p.title.parameterize}.html", "/course.html", locals: { course: p }
    end

  end

  ignore "/course.html"


  # due to how middleman 4 collections work (http://bit.ly/2jHZTI9),
  # always use `dato` inside a `.tap` method block, like this:
  dato.tap do |dato|

    dato.courses.each do |p|
      proxy "/cursos/presenciales/#{p.course_link}/index.html", "/cursos/presenciales/course-detail.html", locals: { course: p }
    end

  end

  ignore "/cursos/presenciales/course-detail.html"



# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/


activate :directory_indexes
activate :asset_hash
set :relative_links, true


# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

# Build-specific configuration
configure :build do
  # Relative assets
  activate :relative_assets

  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Minify html
  activate :minify_html, remove_input_attributes: false

end
