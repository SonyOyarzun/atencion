import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import swal from 'sweetalert';

import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
        padding: 30,
        width: '30%',
    },
    media1: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
        padding: 50,
    },
    media2: {
        width: '30%',
        padding: 40,
        height: '45%',
        aspectRatio: 1,

    },
    select: {
        width: '100%',
        padding: 50,
    },
});

import { mostrar } from './Functions'

export default function Caja() {


    const [solicitud, setSolicitud] = useState([])

    const listen = () => {

        mostrar().then(response => {
            console.log('solicitud :', response)

            let array = []
            array.push(response)
            console.log('array ', array)
            setSolicitud(array[0])
        })

    }


    listen()



    const classes = useStyles();

    return (
        <Card className={classes.select}>
            <CardActionArea>
                <CardMedia
                    className={classes.media1}
                    image="https://www.ugm.cl/ugm/site/artic/20200619/imag/foto_0000000420200619134759/300x120_ugm_animado_2.gif"
                    title="Contemplative Reptile"
                />
            </CardActionArea>
            <div className={'row'}>
                {solicitud.map((data, order) => (

                    <Card className={classes.media2}>
                        <CardActionArea>
                            <CardContent className='text-center'>
                                <Typography gutterBottom variant="h5" component="h1">
                                    Modulo:
                    </Typography>
                                <Typography gutterBottom variant="h5" component="h5">
                                    {data.posicion}
                                </Typography>
                            </CardContent>
                            <CardContent className='text-center'>
                                <Typography gutterBottom variant="h5" component="h5">
                                    Atiende a número:
                    </Typography>
                                <Typography color="textSecondary" component="p" variant="h4" component="h1">
                                    {data.numero}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                ))}
            </div>

        </Card>
    );
}