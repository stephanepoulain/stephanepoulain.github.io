# Code from http://movb.de/jekyll-details-support.html

module Jekyll
    module Tags
      class DetailsTag < Liquid::Block
  
        def initialize(tag_name, markup, tokens)
          super
          parts = markup.split('|')
          @caption = parts[0].strip
          @image = parts[1] ? parts[1].strip : nil
        end

        def render(context)
          site = context.registers[:site]
          converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
          caption = converter.convert(@caption).gsub(/<\/?p[^>]*>/, '').chomp
          body = converter.convert(super(context))
          cls = @image ? " class=\"has-preview\" data-preview=\"#{@image}\"" : ""
          "<details#{cls}><summary>#{caption}</summary>#{body}</details>"
        end
  
      end
    end
  end
  
  Liquid::Template.register_tag('details', Jekyll::Tags::DetailsTag)