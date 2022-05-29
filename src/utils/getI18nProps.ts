export const getI18nRequiredProps = (
  objectData: unknown,
  requiredPropsList: string[],
  language: string
) =>
  Object.fromEntries(
    Object.entries(objectData[language]).filter(([key]) =>
      requiredPropsList.includes(key)
    )
  )
