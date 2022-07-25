// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getManifest from "../../utils/getManifest";

export default function handler(req: NextApiRequest, res: NextApiResponse<ReturnType<typeof getManifest>>) {
	res.status(200).json(getManifest());
}
