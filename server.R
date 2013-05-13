library(shiny)
shinyServer(function(input, output){
  # addResourcePath('libraries', 'libraries')
  # apps = dir("apps", pattern = '^app', full = T)
  # for (app in apps){
  #  source(app, local = TRUE)
  # }
  # outputOptions(output, 'result1', suspendWhenHidden=FALSE)
  # outputOptions(output, 'result2', suspendWhenHidden=FALSE)
  source('apps/app3.R', local = TRUE)
})


