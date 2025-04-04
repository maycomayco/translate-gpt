const getEnvVar = (key) => {
  const value = import.meta.env[key]

  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`)
  }

  return value
}

export const env = {
  OPENAI_API_KEY: getEnvVar('VITE_OPENAI_API_KEY'),
  // Add other env vars here
}
