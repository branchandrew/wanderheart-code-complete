# WanderHeart

## SVG Attribute Naming in React

When working with SVG elements in React, attributes with colons need to be converted to camelCase format:

- `xlink:href` → `xlinkHref`
- `xlink:actuate` → `xlinkActuate`
- `xlink:arcrole` → `xlinkArcrole`
- `xlink:role` → `xlinkRole`
- `xlink:show` → `xlinkShow`
- `xlink:title` → `xlinkTitle`
- `xlink:type` → `xlinkType`
- `xml:base` → `xmlBase`
- `xml:lang` → `xmlLang`
- `xml:space` → `xmlSpace`
- `xmlns:xlink` → `xmlnsXlink`

If you encounter the error `Invalid DOM property 'xlink:href'. Did you mean 'xlinkHref'?`, search for SVG elements in your components and update the attribute names accordingly.

You can use the utility functions in `utils/svg-helper.tsx` to help with this conversion.
