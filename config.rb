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


ignore "/course.html"
data.courses.each do |p|
  proxy "/#{p.title.parameterize}.html", "/course.html", locals: { course: p }
end


# due to how middleman 4 collections work (http://bit.ly/2jHZTI9),
# always use `dato` inside a `.tap` method block, like this:
dato.tap do |dato|
  dato.courses.each do |p|
    proxy "/#{p.title.parameterize}.html", "/course.html", locals: { course: p }
  end
end

# tell Middleman to ignore the template
ignore "/course.html"




# enable livereload on development
configure :development do
  activate :livereload
end


activate :dato,
  token: '36b425f0bb13f6863917',
  base_url: 'https://timber-grader-randy-62421.netlify.com/',
  live_reload: true

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

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
