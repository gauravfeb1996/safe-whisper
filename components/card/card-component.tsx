import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardProps {
    size?: "default" | "sm";
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    content: string | React.ReactNode;
    footer?: string | React.ReactNode;
    classes?: {
        card: string,
        header: string,
        title: string,
        description: string,
        content: string
        footer: string

    }
}

export function MainCard({ size, title, description, content, footer, classes }: CardProps) {
  return (
    <Card size={size ||"default"} className={`mx-auto w-full ${classes?.card}`}>
        {!!(title || description) &&
            <CardHeader className={classes?.header}>
                <CardTitle className={classes?.title}>
                    {title}
                </CardTitle>
                <CardDescription className={classes?.description}>
                    {description}
                </CardDescription>
            </CardHeader>
        }
      <CardContent className={classes?.content}>
        {content}
      </CardContent>
      {footer && 
        <CardFooter className={classes?.footer}>
            {footer}
        </CardFooter>
      }
    </Card>
  )
}
