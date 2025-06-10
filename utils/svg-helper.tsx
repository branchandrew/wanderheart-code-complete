// This file contains utility functions for working with SVG elements
// React requires SVG attributes with colons to be written in camelCase
// For example, xlink:href should be xlinkHref

export const svgAttributeMap = {
  "xlink:href": "xlinkHref",
  "xlink:actuate": "xlinkActuate",
  "xlink:arcrole": "xlinkArcrole",
  "xlink:role": "xlinkRole",
  "xlink:show": "xlinkShow",
  "xlink:title": "xlinkTitle",
  "xlink:type": "xlinkType",
  "xml:base": "xmlBase",
  "xml:lang": "xmlLang",
  "xml:space": "xmlSpace",
  "xmlns:xlink": "xmlnsXlink",
}

// Use this function when creating SVG elements to ensure proper attribute naming
export function convertSvgAttributes(attributes: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {}

  for (const [key, value] of Object.entries(attributes)) {
    const newKey = svgAttributeMap[key as keyof typeof svgAttributeMap] || key
    result[newKey] = value
  }

  return result
}
