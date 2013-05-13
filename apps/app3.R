.slidifyEnv = new.env()
runCode <- function(code){
  code = paste('```{r echo = F,message = F, comment = NA, results = "asis"}\n', code, "\n```", 
    collapse = '\n')
  out = knitr::knit(text = code, envir = .slidifyEnv)
  markdown::markdownToHTML(text = out, fragment = TRUE)
}

invisible(lapply(1:2, function(i){
  output[[paste0('result', i)]] <- reactive({
    if (input[[paste0('run', i)]] != 0)
      return(isolate({
        print('running code')
        runCode(input[[paste0('code', i)]])
      }))
  })
  outputOptions(output, paste0('result', i), suspendWhenHidden = F)
}))