import { UserButton } from "@clerk/nextjs";

// ...rest of the imports and component definitions

export default function Header() {

 let withDivider = true;
 let withProfile = true;
 navigation;
 settings;


 return (
	 // Adding the UserButton component in the nav
   <Bounded as="header">
     <div className="grid grid-cols-1 justify-items-center gap-20">
       <nav className="flex flex-row gap-4 items-center">
         <UserButton />
         <ul className="flex flex-wrap justify-center gap-10">
           <NavItem>
             <Link href="/">
               <PrismicText field={navigation.data.homepageLabel} />
             </Link>
           </NavItem>
           {navigation.data?.links.map((item) => (
             <NavItem key={prismic.asText(item.label)}>
               <PrismicNextLink field={item.link}>
                 <PrismicText field={item.label} />
               </PrismicNextLink>
             </NavItem>
           ))}
         </ul>
       </nav>
       {withProfile && (
         <Profile
           name={settings.data.name}
           description={settings.data.description}
           profilePicture={settings.data.profilePicture}
         />
       )}
       {withDivider && <HorizontalDivider />}
     </div>
   </Bounded>
 );
};