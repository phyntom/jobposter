import { PropsWithChildren } from 'react';
import { cn } from '../util/cn';
import { Button } from './ui/button';
import { Card, CardHeader, CardFooter, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

type CustomCardProps = {
   cardTitle: string;
   cardDescription: string;
   cardIcon: React.ReactNode;
   buttonText: string;
   cardClassName?: string;
   buttonClassName?: string;
   buttonLink?: string;
};

const CustomCard: React.FC<PropsWithChildren<CustomCardProps>> = ({
   cardTitle,
   cardDescription,
   cardIcon,
   buttonText,
   cardClassName,
   buttonClassName,
   buttonLink,
}: CustomCardProps) => {
   return (
      <Card className={cn(`py-4`, cardClassName)}>
         <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
            <p className='text-2xl font-bold'>{cardTitle}</p>
            {cardIcon}
         </CardHeader>
         <CardContent className='overflow-visible py-2'>
            <p>{cardDescription}</p>
         </CardContent>
         <CardFooter>
            <Link to={buttonLink ? buttonLink : ''}>
               <Button className={cn(buttonClassName)}>{buttonText}</Button>
            </Link>
         </CardFooter>
      </Card>
   );
};

export default CustomCard;
