/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticPropsContext } from 'next';
import { format } from 'date-fns';

import dbConnect from '@/middleware/mongodb';
import News, { NewsType } from '@/models/news';
import { LeanDocument } from 'mongoose';

export async function getLastTenNews(
  context: GetStaticPropsContext
): Promise<LeanDocument<NewsType>[]> {
  await dbConnect();

  const result = await News.find({}).sort({ created_at: -1 }).limit(10).lean();

  const news = result.map((doc) => {
    doc._id = String(doc._id);
    doc.created_at = format(doc.created_at, 'dd/MM/yyyy');
    doc.updated_at = format(doc.updated_at, 'dd/MM/yyyy');

    return doc;
  });

  return news;
}
