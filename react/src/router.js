
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaPrincipal from './pages/pagina_principal';
import Error from './pages/erro';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={PaginaPrincipal} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}