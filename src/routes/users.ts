import express, {Request, Response} from 'express';
var router = express.Router();

/* GET users listing. */
const datas: Record<string, any>[] = [];
interface data{
  name: string;
  id: number;
}

router.get('/', (req: Request, res: Response) => {
  res.status(200).send(datas);
});

router.post('/member', (req: Request, res: Response) => {
  const data: data = { name: req.body.name, id: datas.length+1 };
  datas.push(data);
  if (!data) {
    return res.status(400).json('data not correctly compiled');
  }
  return res.status(201).send(data);
})

export default router;
