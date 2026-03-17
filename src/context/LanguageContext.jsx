import { createContext, useContext, useEffect, useState } from 'react'
import { availableLanguages, defaultLanguage, getSiteContent } from '../data/content'

const STORAGE_KEY = 'gnc-site-language'
const LanguageContext = createContext(null)

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY)
  return availableLanguages.some((item) => item.code === storedLanguage)
    ? storedLanguage
    : defaultLanguage
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage)
  const content = getSiteContent(language)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language

    if (content.metadata?.title) {
      document.title = content.metadata.title
    }

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag && content.metadata?.description) {
      descriptionTag.setAttribute('content', content.metadata.description)
    }
  }, [content.metadata?.description, content.metadata?.title, language])

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        languages: availableLanguages,
        content,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
