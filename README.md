# 컴포넌트
### UI Components
```tsx
AppButton: React.FC<{
  onClick: () => void,
  children: React.ReactNode,
  color?: string,
  backgroundColor?: string
  borderColor?: string
  border?: number
  style?: React.CSSProperties
}>

AppCard: React.FC<{
  children: React.ReactNode,
  style?: React.CSSProperties
}>

AppInput: React.FC<{
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onPressEnter?: () => void
}>
```
