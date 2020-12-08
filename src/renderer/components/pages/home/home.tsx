import React, {FC} from 'react';
import * as PagesCore from '../pages.core';


const HomePage: FC = () =>{
    return(
        <PagesCore.Container>
            <PagesCore.Content>
                <div>
                    <p>
                        Homepage component - you can put navbar above content div, and footer below.<br></br>
                        Content is flex: 1 so it will take rest of empty space.<br></br><br></br>
                        Set up your routes in routes.ts, and thats all. You can simply work with this template.
                    </p>
                </div>
            </PagesCore.Content>
        </PagesCore.Container>
    )
}

export default HomePage;