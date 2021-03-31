/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticPropsContext } from 'next';

import dbConnect from '@/middleware/mongodb';
import Info, { InfoType } from '@/models/info';
import { LeanDocument } from 'mongoose';

export async function getMainInfo(
  context: GetStaticPropsContext
): Promise<LeanDocument<InfoType> | null> {
  await dbConnect();

  const result = await Info.findOne({}).lean();

  if (!result) return null;

  return {
    title: result.title,
    description: result.description,
    by: result.by,
  };
}
