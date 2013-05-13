dat <- reactive({
  # blogify::pagify('www/index.Rmd')
  dist = switch(input$dist, norm = rnorm, unif = runif, 
    exp = rexp, rnorm)
  dist(input$n)
})

output$plot1 <- renderPlot({
  dist = input$dist
  n = input$n
  hist(dat(), main = sprintf("r%s(%s)", dist, n))
})

output$table <- renderTable({
  data.frame(x = dat())
})

outputOptions(output, "plot1", suspendWhenHidden = FALSE)